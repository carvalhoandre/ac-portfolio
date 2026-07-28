import { OptimizedImage } from "../components/OptimizedImage";
import { content, type Locale } from "../content/portfolio";

interface AboutProps {
  locale: Locale;
}

export function About({ locale }: AboutProps) {
  const copy = content[locale];

  return (
    <section
      className="section"
      data-reveal
      id="sobre"
      aria-labelledby="about-title"
    >
      <div className="container about-grid">
        <div className="about-visual">
          <OptimizedImage
            alt={
              locale === "pt-BR"
                ? "André Leite Carvalho em um segundo retrato profissional"
                : "A second professional portrait of André Leite Carvalho"
            }
            className="about-image"
            kind="about"
          />
        </div>
        <div className="about-content">
          <p className="eyebrow">{copy.about.eyebrow}</p>
          <h2 id="about-title">{copy.about.title}</h2>
          <div className="about-copy">
            {copy.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <ul className="principles" aria-label="Working principles">
            {copy.about.principles.map((principle) => (
              <li key={principle}>{principle}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
