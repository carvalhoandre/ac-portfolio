import { content, localePath, type Locale } from "../content/portfolio";
import { BrandLogo } from "../components/BrandLogo";
import { Link } from "react-router-dom";

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
            <Link className="button" to={home}>
              {copy.home}
            </Link>
            <Link className="button button-secondary" to={`${home}#projetos`}>
              {copy.projects}
            </Link>
            <Link className="text-link" to={`${home}#contato`}>
              {copy.contact}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
