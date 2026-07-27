import { SectionHeading } from "../components/SectionHeading";
import { content, type Locale } from "../content/portfolio";

interface ExperienceProps {
  locale: Locale;
}

export function Experience({ locale }: ExperienceProps) {
  const copy = content[locale].impact;

  return (
    <section
      className="section section-impact"
      id="experiencia"
      aria-labelledby="impact-title"
    >
      <div className="container impact-layout">
        <SectionHeading
          description={copy.description}
          eyebrow={copy.eyebrow}
          id="impact-title"
          title={copy.title}
        />
        <ol className="impact-list">
          {copy.items.map((item, index) => (
            <li key={item.title}>
              <span aria-hidden="true">0{index + 1}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
