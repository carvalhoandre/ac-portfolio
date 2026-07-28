# Portfolio experience evolution — technical decisions

## Delivery architecture

The portfolio remains on React, TypeScript, Vite, static prerendering, and Netlify. This stack already produces indexable localized HTML, lightweight client JavaScript, predictable static deployment, and a working 404 strategy. Moving to Next.js now would add framework and hosting complexity without solving a current product constraint.

A migration should be reconsidered if the portfolio gains authenticated content, frequently changing server data, a CMS with on-demand revalidation, authenticated GitHub GraphQL data, or server-only personalization. If that happens, the current typed content model, route metadata, and section components can be moved incrementally to the Next.js App Router.

## GitHub data

GitHub highlights use the public REST API during the build, never in the visitor's browser. `scripts/sync-github.mjs` keeps a curated repository allowlist, rejects forks, archived repositories, and entries without descriptions, applies a four-second timeout, and reuses a 24-hour generated cache. The committed fallback keeps the section usable when the API or its unauthenticated rate limit is unavailable. No token is stored in frontend code.

## Contact security

The form uses Netlify Forms because the site is statically hosted on Netlify. Submission is server-handled without a client API key. Native field constraints, length limits, and a honeypot reduce malformed and automated submissions. Netlify's dashboard should keep spam filtering enabled and apply notification rules with least-privilege recipients. No sensitive information should be requested in this form.

## Newsletter assessment

A newsletter was deliberately not added in this release. The current content cadence and product goal do not justify collecting another category of personal data. Adding one now would require an explicit consent record, privacy-policy coverage, double opt-in, unsubscribe handling, retention rules, and a reliable publishing cadence. Reassess when André's Lab has a consistent release schedule and a chosen provider that supports LGPD-aligned consent and data export/deletion.

## Project media

The existing project SVGs remain lightweight, scalable cover images. Prumo Digital receives a new responsive SVG composition based on the supplied visual reference. The screenshots embedded in the task were not delivered as source image files, so they were not converted into lossy approximations. When original desktop/mobile exports are available, place them under `public/images/projects/<slug>/` and run the existing Sharp pipeline to generate AVIF, WebP, and JPEG variants with explicit dimensions.

## Motion and locale navigation

Motion uses CSS and `IntersectionObserver`, keeps content visible before JavaScript, and disables transitions under `prefers-reduced-motion`. Locale changes use `history.pushState` inside the existing client root, preserve the hash and viewport through animation frames, and do not remount the application or reload the document. Theme state remains mounted throughout the change.
