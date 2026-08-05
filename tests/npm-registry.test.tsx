import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { npmPackageNames } from "../src/config/npm-packages";
import { clearNpmPackagesCache } from "../src/hooks/useNpmPackages";
import {
  loadNpmPackages,
  normalizeNpmMetadata,
  normalizePublicUrl,
} from "../src/services/npm-registry";
import { NpmPackages } from "../src/sections/NpmPackages";

const registryResponse = (name: string, overrides = {}) =>
  new Response(
    JSON.stringify({
      name,
      "dist-tags": { latest: "2.4.1" },
      time: { modified: "2026-02-18T10:30:00.000Z" },
      versions: {
        "2.4.1": {
          description: `<strong>${name}</strong> as text`,
          keywords: ["React", "CLI", "tooling", "ignored"],
          license: "MIT",
          repository: {
            url: `git+https://github.com/carvalhoandre/${name}.git`,
          },
        },
      },
      ...overrides,
    }),
    { status: 200 },
  );

describe("npm registry integration", () => {
  beforeEach(() => {
    clearNpmPackagesCache();
    vi.mocked(fetch).mockReset();
  });

  it("normalizes the latest version and only safe public URLs", () => {
    const packageData = normalizeNpmMetadata("react-vite-clean-cli", {
      "dist-tags": { latest: "3.2.1" },
      time: { modified: "2026-06-01T12:00:00.000Z" },
      versions: {
        "3.2.1": {
          description: "Current release",
          homepage: "javascript:alert(1)",
          keywords: ["React", "Vite", "CLI", "extra"],
          license: "MIT",
          repository: "git+https://github.com/carvalhoandre/tool.git",
        },
      },
    });

    expect(packageData).toMatchObject({
      description: "Current release",
      keywords: ["React", "Vite", "CLI"],
      license: "MIT",
      repositoryUrl: "https://github.com/carvalhoandre/tool",
      version: "3.2.1",
    });
    expect(packageData.homepageUrl).toBeUndefined();
    expect(normalizePublicUrl("git://github.com/user/repo.git")).toBe(
      "https://github.com/user/repo",
    );
  });

  it("keeps successful packages when one registry request fails", async () => {
    const warning = vi
      .spyOn(console, "warn")
      .mockImplementation(() => undefined);
    vi.mocked(fetch).mockImplementation(async (input) => {
      const name = decodeURIComponent(String(input).split("/").pop() ?? "");
      if (name === "create-flask-api")
        return new Response(null, { status: 404 });
      return registryResponse(name);
    });

    const result = await loadNpmPackages();

    expect(result.status).toBe("partial");
    expect(result.packages).toHaveLength(4);
    expect(result.packages[0].version).toBe("2.4.1");
    expect(result.packages[1]).toEqual({
      keywords: [],
      name: "create-flask-api",
      npmUrl: "https://www.npmjs.com/package/create-flask-api",
    });
    expect(warning).toHaveBeenCalledWith(
      "[npm registry] create-flask-api: http",
    );
  });

  it("renders local links after a total failure and does not duplicate requests", async () => {
    vi.spyOn(console, "warn").mockImplementation(() => undefined);
    vi.mocked(fetch).mockRejectedValue(new TypeError("offline"));
    const view = render(<NpmPackages locale="pt-BR" />);

    expect(document.querySelectorAll('[aria-busy="true"]')).toHaveLength(4);

    await screen.findByText(/detalhes estão temporariamente indisponíveis/i);
    for (const name of npmPackageNames) {
      expect(screen.getByRole("heading", { name })).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: `Ver no npm: ${name}` }),
      ).toHaveAttribute("href", `https://www.npmjs.com/package/${name}`);
    }

    expect(fetch).toHaveBeenCalledTimes(4);
    view.rerender(<NpmPackages locale="pt-BR" />);
    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(4));
  });

  it("cancels pending registry requests when the final consumer unmounts", () => {
    vi.spyOn(console, "warn").mockImplementation(() => undefined);
    const signals: AbortSignal[] = [];
    vi.mocked(fetch).mockImplementation(
      (_input, init) =>
        new Promise<Response>((_resolve, reject) => {
          const signal = init?.signal;
          if (!signal) return;
          signals.push(signal);
          signal.addEventListener(
            "abort",
            () => reject(new DOMException("Cancelled", "AbortError")),
            { once: true },
          );
        }),
    );

    const view = render(<NpmPackages locale="pt-BR" />);
    expect(signals).toHaveLength(4);
    view.unmount();
    expect(signals.every((signal) => signal.aborted)).toBe(true);
  });

  it("renders descriptions as text and omits an invalid repository", async () => {
    vi.mocked(fetch).mockImplementation(async (input) => {
      const name = decodeURIComponent(String(input).split("/").pop() ?? "");
      return registryResponse(name, {
        versions: {
          "2.4.1": {
            description: `<img src=x onerror=alert(1)> ${name}`,
            repository: { url: "file:///private/repository" },
          },
        },
      });
    });
    render(<NpmPackages locale="en" />);

    await screen.findByText(/<img src=x onerror=alert\(1\)> react-vite/i);
    expect(document.querySelector(".npm-card img")).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /view repository/i }),
    ).not.toBeInTheDocument();
    expect(screen.getAllByText("v2.4.1")).toHaveLength(4);
    expect(screen.getAllByText("Feb 18, 2026")).toHaveLength(4);
  });
});
