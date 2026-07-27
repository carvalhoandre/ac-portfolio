import { Icon } from "../components/Icon";
import { content, profile, type Locale } from "../content/portfolio";

interface ContactProps {
  locale: Locale;
}

export function Contact({ locale }: ContactProps) {
  const copy = content[locale].contact;
  const emailSubject = encodeURIComponent(
    locale === "pt-BR" ? "Olá, André" : "Hello, André",
  );

  return (
    <section
      className="section section-contact"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="contact-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
        <div className="contact-actions">
          <a
            className="button"
            href={`mailto:${profile.email}?subject=${emailSubject}`}
          >
            <Icon name="mail" /> {copy.email}
          </a>
          <a
            className="contact-link"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <Icon name="linkedin" />
            <span>
              {copy.linkedin}
              <small>{profile.linkedin.replace("https://", "")}</small>
            </span>
            <Icon name="arrow-up-right" />
          </a>
          <a
            className="contact-link"
            href={profile.github}
            rel="noreferrer"
            target="_blank"
          >
            <Icon name="github" />
            <span>
              {copy.github}
              <small>{profile.github.replace("https://", "")}</small>
            </span>
            <Icon name="arrow-up-right" />
          </a>
          <a
            className="contact-link"
            href={profile.whatsapp}
            rel="noreferrer"
            target="_blank"
          >
            <Icon name="whatsapp" />
            <span>
              {copy.whatsapp}
              <small>{profile.phoneDisplay}</small>
            </span>
            <Icon name="arrow-up-right" />
          </a>
          <a
            className="contact-link"
            download
            href={profile.resume[locale]}
            type="application/pdf"
          >
            <Icon name="download" />
            <span>
              {copy.resume}
              <small>PDF</small>
            </span>
            <Icon name="arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
