import { content, profile, type Locale } from "../content/portfolio";
import { Icon } from "../components/Icon";
import { OptimizedImage } from "../components/OptimizedImage";
import { Link } from "react-router-dom";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const copy = content[locale];

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-content">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1 id="hero-title">{copy.hero.title}</h1>
          <p className="hero-subtitle">{copy.hero.subtitle}</p>
          <p className="hero-support">{copy.hero.support}</p>
          <div className="hero-actions">
            <Link className="button" to="#projetos">
              {copy.hero.projects} <Icon name="arrow-right" />
            </Link>
            <Link className="button button-secondary" to="#contato">
              {copy.hero.contact}
            </Link>
            <a
              className="text-link"
              download
              href={profile.resume[locale]}
              type="application/pdf"
            >
              <Icon name="download" /> {copy.hero.resume}
            </a>
          </div>
          <p className="availability">
            <span aria-hidden="true" /> {copy.hero.availability}
          </p>
        </div>
        <div className="hero-visual">
          <div className="portrait-frame">
            <OptimizedImage
              alt={copy.hero.imageAlt}
              className="hero-image"
              kind="hero"
              priority
            />
          </div>
          <p className="portrait-caption">
            <span>Frontend</span>
            <span>Architecture</span>
            <span>Products</span>
          </p>
        </div>
      </div>
    </section>
  );
}
