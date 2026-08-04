import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
  window.localStorage.clear();
  document.documentElement.removeAttribute("data-theme");
  document.body.style.overflow = "";
});

Object.defineProperty(window, "scrollTo", {
  configurable: true,
  value: vi.fn(),
  writable: true,
});

Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
  configurable: true,
  value: vi.fn(),
  writable: true,
});

Object.defineProperty(window, "requestAnimationFrame", {
  configurable: true,
  value: vi.fn((callback: FrameRequestCallback) => {
    callback(0);
    return 1;
  }),
  writable: true,
});

Object.defineProperty(window, "cancelAnimationFrame", {
  configurable: true,
  value: vi.fn(),
  writable: true,
});

Object.defineProperty(globalThis, "fetch", {
  configurable: true,
  value: vi.fn(async (input: string | URL | Request) => {
    const name = decodeURIComponent(
      String(input).split("/").pop() ?? "package",
    );
    return new Response(
      JSON.stringify({
        name,
        "dist-tags": { latest: "1.0.0" },
        time: { modified: "2026-01-15T12:00:00.000Z" },
        versions: {
          "1.0.0": {
            description: `${name} package description`,
            keywords: ["tooling", "open-source"],
            license: "MIT",
            repository: {
              url: `git+https://github.com/carvalhoandre/${name}.git`,
            },
          },
        },
      }),
      { status: 200 },
    );
  }),
  writable: true,
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
