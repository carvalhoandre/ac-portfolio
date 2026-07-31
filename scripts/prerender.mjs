import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const projectRoot = resolve(import.meta.dirname, "..");
const distRoot = resolve(projectRoot, "dist");
const template = await readFile(resolve(distRoot, "index.html"), "utf8");
const serverEntry = await import(
  pathToFileURL(resolve(distRoot, "server/entry-server.js")).href
);

const setMeta = (html, metadata, locale) => {
  const safeJsonLd = JSON.stringify(metadata.jsonLd).replace(/</g, "\\u003c");
  return html
    .replace(/<html lang="[^"]+">/, `<html lang="${locale}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${metadata.title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/>/,
      `<meta name="description" content="${metadata.description}" />`,
    )
    .replace(
      /<meta name="robots" content="[^"]*"\s*\/>/,
      `<meta name="robots" content="${metadata.robots}" />`,
    )
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${metadata.canonical}" />`,
    )
    .replace(
      /<link rel="alternate" hreflang="pt-BR" href="[^"]*"\s*\/>/,
      `<link rel="alternate" hreflang="pt-BR" href="${metadata.alternatePt}" />`,
    )
    .replace(
      /<link rel="alternate" hreflang="en" href="[^"]*"\s*\/>/,
      `<link rel="alternate" hreflang="en" href="${metadata.alternateEn}" />`,
    )
    .replace(
      /<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/>/,
      `<link rel="alternate" hreflang="x-default" href="${metadata.alternatePt}" />`,
    )
    .replace(
      /<meta property="og:type" content="[^"]*"\s*\/>/,
      `<meta property="og:type" content="${metadata.type}" />`,
    )
    .replace(
      /<meta property="og:url" content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${metadata.canonical}" />`,
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${metadata.title}" />`,
    )
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${metadata.description}" />`,
    )
    .replace(
      /<meta property="og:image" content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${metadata.image}" />`,
    )
    .replace(
      /<meta property="og:image:alt" content="[^"]*"\s*\/>/,
      `<meta property="og:image:alt" content="${metadata.imageAlt}" />`,
    )
    .replace(
      /<meta property="og:locale" content="[^"]*"\s*\/>/,
      `<meta property="og:locale" content="${metadata.locale}" />`,
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${metadata.title}" />`,
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${metadata.description}" />`,
    )
    .replace(
      /<meta name="twitter:image" content="[^"]*"\s*\/>/,
      `<meta name="twitter:image" content="${metadata.image}" />`,
    )
    .replace(
      /<meta name="twitter:image:alt" content="[^"]*"\s*\/>/,
      `<meta name="twitter:image:alt" content="${metadata.imageAlt}" />`,
    )
    .replace(
      /<script id="structured-data" type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script id="structured-data" type="application/ld+json">${safeJsonLd}</script>`,
    );
};

const writeRoute = async (pathname) => {
  const rendered = serverEntry.renderPath(pathname);
  const withMeta = setMeta(template, rendered.metadata, rendered.locale);
  const html = withMeta.replace(
    '<div id="root"></div>',
    `<div id="root" data-prerender-path="${pathname}">${rendered.html}</div>`,
  );
  const destination =
    pathname === "/"
      ? resolve(distRoot, "index.html")
      : resolve(distRoot, pathname.slice(1), "index.html");
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, html, "utf8");
};

for (const pathname of serverEntry.staticPaths) {
  await writeRoute(pathname);
}

const notFound = serverEntry.renderPath("/404.html");
const notFoundHtml = setMeta(
  template,
  notFound.metadata,
  notFound.locale,
).replace(
  '<div id="root"></div>',
  `<div id="root" data-prerender-path="/404.html">${notFound.html}</div>`,
);
await writeFile(resolve(distRoot, "404.html"), notFoundHtml, "utf8");
await rm(resolve(distRoot, "server"), { recursive: true, force: true });

console.log(
  `Prerendered ${serverEntry.staticPaths.length} public routes and 404.html.`,
);
