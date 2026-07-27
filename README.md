# André Leite Carvalho — Portfolio

Professional portfolio focused on frontend architecture, Design Systems, integrations, quality, cloud, and Software Architecture.

Live site: [andreleitecarvalho.space](https://andreleitecarvalho.space)

## Stack

- React 19 and TypeScript
- Vite 8 with static prerendering
- Vitest and Testing Library
- Playwright using locally installed Chrome
- ESLint 10 and Prettier
- Sharp image pipeline

The build produces indexable Portuguese and English pages at `/pt-BR/` and `/en/`, localized case studies, and a custom 404 page. Professional content is centralized in `src/content`.

## Commands

```bash
npm ci
npm run dev
npm run optimize:images
npm run format:check
npm run lint
npm run typecheck
npm run test
npm run test:e2e
npm run build
npm run preview
npm run audit:bundle
```

## Production

The static output is written to `dist`. Netlify reads `public/_redirects`; public routes are prerendered during `npm run build`, and unknown URLs resolve to `404.html` with a real 404 status on Netlify.

See [the implementation report](docs/portfolio-refactor-report.md) and [Search Console setup](docs/search-console.md) for validation and indexing details.
