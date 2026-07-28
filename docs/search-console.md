# Google Search Console setup

1. Add or open the domain property for `andreleitecarvalho.space`.
2. Keep the existing DNS or HTML verification active. The current HTML verification token remains in the document head.
3. Submit `https://andreleitecarvalho.space/sitemap.xml` under **Sitemaps**.
4. Inspect `/pt-BR/`, `/en/`, and one project route from each language after deployment.
5. Request indexing only after the production deployment returns the correct canonical and a successful 200 response.
6. Monitor **Page indexing**, **Core Web Vitals**, and **Enhancements** after Google recrawls the site.

The sitemap contains only public, prerendered URLs. `hreflang`, canonical, Open Graph, Twitter Card, and JSON-LD values are emitted in the initial HTML for every generated route. This repository cannot confirm indexing or Search Console status without access to the property.
