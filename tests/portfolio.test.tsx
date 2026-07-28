import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axe from "axe-core";
import { describe, expect, it, vi } from "vitest";
import App from "../src/App";
import {
  getPageMetadata,
  resolveRoute,
  staticPaths,
} from "../src/content/routes";
import { content, profile } from "../src/content/portfolio";

describe("portfolio experience", () => {
  it("renders a single descriptive heading and the primary CTAs", () => {
    render(<App locale="pt-BR" route={{ type: "home" }} />);

    expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
    expect(
      screen.getByRole("heading", { name: profile.name }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ver projetos/i })).toHaveAttribute(
      "href",
      "#projetos",
    );
    expect(
      screen.getAllByRole("link", { name: /baixar currículo/i })[0],
    ).toHaveAttribute("href", profile.resume["pt-BR"]);
  });

  it("renders all projects with descriptive case-study links", () => {
    render(<App locale="en" route={{ type: "home" }} />);

    for (const project of content.en.projects) {
      expect(
        screen.getByRole("heading", { name: project.title }),
      ).toBeInTheDocument();
      expect(
        screen.getAllByRole("link", {
          name: new RegExp(`case study.*${project.title}`, "i"),
        }).length,
      ).toBeGreaterThan(0);
    }
  });

  it("supports keyboard navigation in the journey tabs", async () => {
    const user = userEvent.setup();
    render(<App locale="pt-BR" route={{ type: "home" }} />);
    const education = screen.getByRole("tab", { name: "Educação" });
    const experience = screen.getByRole("tab", { name: "Experiência" });

    education.focus();
    await user.keyboard("{ArrowRight}");

    expect(experience).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Hyperlocal")).toBeInTheDocument();
  });

  it("persists the theme choice and exposes accessible mobile navigation", async () => {
    const user = userEvent.setup();
    render(<App locale="pt-BR" route={{ type: "home" }} />);

    const theme = screen.getByRole("button", { name: "Usar tema escuro" });
    await user.click(theme);
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(window.localStorage.getItem("portfolio-theme")).toBe("dark");

    const mobileNavigation = screen.getByRole("navigation", {
      name: "Navegação principal mobile",
    });
    expect(mobileNavigation).toBeInTheDocument();
    expect(
      within(mobileNavigation).getByRole("link", {
        name: "Início",
        current: "location",
      }),
    ).toHaveAttribute("href", "#inicio");
  });

  it("shows the confirmed English certification and direct contact channels", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    render(<App locale="pt-BR" route={{ type: "home" }} />);

    await user.click(screen.getByRole("tab", { name: "Certificações" }));
    expect(screen.getByText("English Level B2")).toBeInTheDocument();
    expect(screen.getByText("EF English")).toBeInTheDocument();

    expect(screen.queryByRole("form")).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Enviar e-mail/i }),
    ).toHaveAttribute(
      "href",
      expect.stringContaining("subject=Contato%20pelo%20portf%C3%B3lio"),
    );
    expect(
      screen.getByRole("link", { name: /Falar pelo LinkedIn/i }),
    ).toHaveAttribute("href", profile.linkedin);
    expect(screen.getByRole("link", { name: /Ver GitHub/i })).toHaveAttribute(
      "href",
      profile.github,
    );
    expect(
      screen.getByRole("link", { name: /Conversar no WhatsApp/i }),
    ).toHaveAttribute("href", profile.whatsapp);

    const pathname = window.location.pathname;
    await user.click(
      screen.getByRole("button", { name: /Copiar endereço de e-mail/i }),
    );
    expect(writeText).toHaveBeenCalledWith(profile.email);
    expect(screen.getByText("E-mail copiado")).toBeInTheDocument();
    expect(window.location.pathname).toBe(pathname);
  });

  it("keeps direct contact available when clipboard access fails", async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockRejectedValueOnce(new Error("blocked"));
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    render(<App locale="en" route={{ type: "home" }} />);

    await user.click(
      screen.getByRole("button", { name: /Copy email address/i }),
    );
    expect(
      screen.getByText("Could not copy. Use the address below."),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Send an email/i }),
    ).toHaveAttribute(
      "href",
      expect.stringContaining("subject=Portfolio%20contact"),
    );
  });

  it("uses eager, high-priority hero media and lazy below-fold media", () => {
    render(<App locale="en" route={{ type: "home" }} />);
    const hero = screen.getByAltText(/^professional portrait/i);
    const about = screen.getByAltText(/second professional portrait/i);

    expect(hero).toHaveAttribute("loading", "eager");
    expect(hero).toHaveAttribute("fetchpriority", "high");
    expect(hero).toHaveAttribute("width");
    expect(hero).toHaveAttribute("height");
    expect(about).toHaveAttribute("loading", "lazy");
  });

  it("has no automatically detectable accessibility violations", async () => {
    render(<App locale="pt-BR" route={{ type: "home" }} />);
    const result = await axe.run(document, {
      rules: { "color-contrast": { enabled: false } },
    });
    expect(result.violations).toEqual([]);
  });
});

describe("routing and SEO", () => {
  it("resolves every generated route and a real not-found state", () => {
    for (const path of staticPaths) {
      expect(resolveRoute(path).route.type).not.toBe("notFound");
    }
    expect(resolveRoute("/pt-BR/nao-existe").route.type).toBe("notFound");
  });

  it("provides localized canonical, hreflang, social and structured data", () => {
    const metadata = getPageMetadata(resolveRoute("/en/"));
    expect(metadata.title).toContain("Frontend Specialist");
    expect(metadata.canonical).toBe(`${profile.website}/en/`);
    expect(metadata.alternatePt).toBe(`${profile.website}/pt-BR/`);
    expect(metadata.alternateEn).toBe(`${profile.website}/en/`);
    expect(metadata.image).toMatch(/1200|andre-leite-carvalho-og/);
    expect(metadata.jsonLd).toHaveProperty("@graph");
  });
});
