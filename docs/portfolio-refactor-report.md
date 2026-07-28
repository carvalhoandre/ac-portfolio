# Portfolio refactor report

## Outcome

The portfolio was rebuilt as a bilingual, statically prerendered React experience with an editorial layout, recruiter-oriented information architecture, project case studies, accessible interaction patterns, optimized media, and complete technical SEO.

## Architecture and content

- New order: Header, Hero, selected projects, expertise, experience and impact, About, education and career, André’s Lab, Contact, and Footer.
- Portuguese and English content is typed and centralized in `src/content/portfolio.ts`.
- Indexable routes: `/pt-BR/`, `/en/`, four localized case studies per language, and a custom `404.html`.
- Projects now include context, challenge, role, responsibilities, decisions, practices, outcome, and only confirmed public links.
- The Hero leads with the Frontend Specialist and Software Architecture positioning, followed by project, contact, and resume actions.
- The experience section uses confirmed contexts instead of unsupported metrics.

## Runtime and dependencies

- Updated React and React DOM to 19.2.8, Vite to 8.1.5, ESLint to 10.8.0, Vitest to 4.1.10, and the associated compatible tooling.
- Removed i18next, react-i18next, React Router, lucide-react, js-yaml, minimatch, direct Rollup, the duplicate React plugin, and unused type packages from the runtime dependency graph.
- `npm audit` reports zero known vulnerabilities.
- The old runtime produced 112.60 kB gzip across its JavaScript and CSS entry/chunks. The new Vite production output produces 76.98 kB gzip, a reduction of about 31.6%.
- The main initial JavaScript changed from 100.26 kB gzip to 72.44 kB gzip. No artificial loader remains.

## UI, mobile, and accessibility

- Mobile-first layout validated from 320 px through 1440 px without horizontal overflow.
- Compact sticky header with the restored historical mark; the mobile experience uses a fixed, safe-area-aware bottom navigation with active-section tracking and a highlighted contact destination.
- Visible focus, semantic landmarks, one `h1`, ordered headings, skip link, descriptive links, 44 px controls, reduced-motion support, and accessible tabs with arrow-key navigation.
- Light and dark themes honor `prefers-color-scheme`, persist safely, and initialize before paint without a hydration mismatch.
- PT and EN labels, navigation, dates, CTAs, metadata, and alternative text are complete.
- Locale changes keep the existing React root mounted, preserve the hash and viewport, and retain the selected theme.
- Expertise badges, three-way education/experience/certification tabs, English Level B2, build-time GitHub highlights, project themes, and a Netlify contact form extend the information architecture without adding runtime dependencies.

## Images and loading

- Only the two existing real photographs are used; no generative image was created.
- Hero variants: 300, 480, and 720 px in AVIF, WebP, and progressive JPEG.
- About variants: 480 and 720 px in AVIF, WebP, and progressive JPEG.
- Hero media is eager with high fetch priority and reserved dimensions; below-fold images are lazy and async.
- The responsive image component includes `srcset`, `sizes`, aspect reservation, fallback, and error handling.
- Social preview is a 1200×630 progressive JPEG (43.4 kB) composed from the real portrait.
- Project SVGs remain lightweight content images. Resume PDFs are downloaded on demand and do not enter the initial page payload; their source sizes remain 2.04 MB (PT) and 1.87 MB (EN).

## SEO

- Localized title, description, canonical, `hreflang`, robots, sitemap, Open Graph, Twitter Cards, language, favicon, manifest, and social image.
- Initial HTML includes JSON-LD using `Person`, `ProfilePage`, `WebSite`, `ItemList`, and `CreativeWork` where appropriate.
- Removed fictitious organization and university placeholders and corrected the canonical domain and social profiles.
- Added a deployment-aware 404 and redirects for selected previous URLs.

## Validation

Baseline Lighthouse mobile: Performance 83, Accessibility 100, Best Practices 96, SEO 92; FCP 2.5 s, LCP 3.8 s, TBT 40 ms, CLS 0.103.

Final Lighthouse 12.8.2 on the production preview:

| Mode    | Performance | Accessibility | Best Practices | SEO |   FCP |   LCP |  TBT | CLS | Speed Index |
| ------- | ----------: | ------------: | -------------: | --: | ----: | ----: | ---: | --: | ----------: |
| Mobile  |          99 |           100 |            100 | 100 | 1.2 s | 2.0 s | 0 ms |   0 |       1.2 s |
| Desktop |         100 |           100 |            100 | 100 | 0.3 s | 0.4 s | 0 ms |   0 |       0.4 s |

The mobile root document responded in 30 ms in the local production preview and transferred 201 KiB for the audited page. LCP and CLS are lab measurements. Lighthouse reports TBT as an interaction proxy; real-user INP is not available until production field data is collected.

Validation commands completed successfully:

- `npm run format:check`
- `npm run lint`
- `npm run typecheck`
- `npm run test`: 9 passed
- `npm run test:e2e`: 15 passed across 320 px, 390 px, and desktop
- `npm run build`: 11 public routes plus `404.html` prerendered
- `npm run audit:bundle`: 80.42 kB gzip JS/CSS budget result
- `npm audit`: zero vulnerabilities

## Limitations

- Lighthouse scores are controlled lab measurements, not guaranteed production or field scores.
- INP and production Core Web Vitals require real-user data after deployment.
- Search Console indexing cannot be confirmed without property access.
- The source portraits are only 300 px wide; the responsive pipeline prevents unnecessarily large transfers, but a future higher-resolution professional source would improve large-display sharpness.
- Resume PDFs are intentionally preserved and renamed, not recompressed, to avoid altering document quality or content.
- The in-app browser integration was unavailable due an environment configuration error; the project's Chrome/Playwright setup and production screenshots were used for equivalent interaction and visual validation.
- The final dependency audit request could not reach the npm audit endpoint because the local environment rejected its TLS certificate; the implementation adds no dependencies and the previous validated lockfile reported zero known vulnerabilities.
- Lighthouse CI was not added as a committed dependency because the evaluated package introduced vulnerable transitive packages. Stable thresholds can be enabled later in the deployment pipeline using the recorded results as the baseline.
