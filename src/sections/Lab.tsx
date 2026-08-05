import { Icon } from "../components/Icon";
import { content, profile, type Locale } from "../content/portfolio";

interface LabProps {
  locale: Locale;
}

export function Lab({ locale }: LabProps) {
  const copy = content[locale].lab;

  return (
    <section
      className="section section-lab"
      data-reveal
      aria-labelledby="lab-title"
    >
      <div className="container lab-card">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="lab-title">{copy.title}</h2>
        </div>
        <p>{copy.description}</p>
        <a
          className="button button-light"
          href={profile.lab}
          rel="noreferrer"
          target="_blank"
        >
          {copy.action} <Icon name="arrow-up-right" />
        </a>
      </div>
    </section>
  );
}
