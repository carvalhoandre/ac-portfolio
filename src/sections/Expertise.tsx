import { SectionHeading } from "../components/SectionHeading";
import { TechnologyBadge } from "../components/TechnologyBadge";
import { content, type Locale } from "../content/portfolio";

interface ExpertiseProps {
  locale: Locale;
}

export function Expertise({ locale }: ExpertiseProps) {
  const copy = content[locale].expertise;

  return (
    <section
      className="section"
      data-reveal
      id="especialidades"
      aria-labelledby="expertise-title"
    >
      <div className="container">
        <SectionHeading
          description={copy.description}
          eyebrow={copy.eyebrow}
          id="expertise-title"
          title={copy.title}
        />
        <div className="expertise-grid">
          {copy.items.map((item, index) => (
            <article className="expertise-card" key={item.title}>
              <span className="expertise-number" aria-hidden="true">
                / 0{index + 1}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul className="technology-list">
                {item.technologies.map((technology) => (
                  <li key={technology}>
                    <TechnologyBadge group={index} technology={technology} />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
