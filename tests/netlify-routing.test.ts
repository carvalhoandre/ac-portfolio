import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const redirects = readFileSync(
  resolve(process.cwd(), "public/_redirects"),
  "utf8",
)
  .trim()
  .split(/\r?\n/);

describe("Netlify routing", () => {
  it("publishes protected static paths before the SPA fallback", () => {
    expect(redirects[redirects.length - 1]).toBe("/* /index.html 200");

    const fallbackIndex = redirects.length - 1;
    for (const rule of [
      "/assets/* /404.html 404",
      "/images/* /404.html 404",
      "/documents/* /404.html 404",
    ]) {
      expect(redirects.indexOf(rule)).toBeGreaterThanOrEqual(0);
      expect(redirects.indexOf(rule)).toBeLessThan(fallbackIndex);
    }
  });

  it("keeps legacy redirects ahead of the fallback", () => {
    expect(redirects.slice(0, 3)).toEqual([
      "/portfolio /pt-BR/#projetos 301",
      "/projetos /pt-BR/#projetos 301",
      "/about /en/#about 301",
    ]);
  });

  it("uses _redirects as the only redirect source", () => {
    const netlifyConfig = readFileSync(
      resolve(process.cwd(), "netlify.toml"),
      "utf8",
    );

    expect(netlifyConfig).not.toContain("[[redirects]]");
  });

  it("allows only the public npm registry required by the package section", () => {
    const netlifyConfig = readFileSync(
      resolve(process.cwd(), "netlify.toml"),
      "utf8",
    );

    expect(netlifyConfig).toContain(
      "connect-src 'self' https://registry.npmjs.org",
    );
    expect(redirects[redirects.length - 1]).toBe("/* /index.html 200");
  });

  it("keeps the localized standalone manifest configuration", () => {
    const manifest = JSON.parse(
      readFileSync(resolve(process.cwd(), "public/site.webmanifest"), "utf8"),
    );

    expect(manifest.start_url).toBe("/pt-BR/");
    expect(manifest.display).toBe("standalone");
    expect(manifest.icons).toHaveLength(2);
  });
});
