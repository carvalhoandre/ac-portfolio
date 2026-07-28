import { content, localePath, type Locale } from "../content/portfolio";
import { BrandLogo } from "../components/BrandLogo";

interface NotFoundPageProps {
  locale: Locale;
}

export function NotFoundPage({ locale }: NotFoundPageProps) {
  const copy = content[locale].notFound;
  const home = localePath(locale);

  return (
    <main className="not-found" id="main-content">
      <div className="container not-found-grid">
        <p className="not-found-code" aria-hidden="true">
          404
        </p>
        <div>
          <BrandLogo compact className="not-found-logo" />
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
          <div className="hero-actions">
            <a className="button" href={home}>
              {copy.home}
            </a>
            <a className="button button-secondary" href={`${home}#projetos`}>
              {copy.projects}
            </a>
            <a className="text-link" href={`${home}#contato`}>
              {copy.contact}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
