import { useEffect, useState } from "react";
import { Icon } from "../components/Icon";
import {
  content,
  localePath,
  profile,
  type Locale,
} from "../content/portfolio";

interface ContactProps {
  locale: Locale;
}

export function Contact({ locale }: ContactProps) {
  const copy = content[locale].contact;
  const [sent, setSent] = useState(false);
  const emailSubject = encodeURIComponent(
    locale === "pt-BR" ? "Olá, André" : "Hello, André",
  );

  useEffect(() => {
    queueMicrotask(() => {
      setSent(
        new URLSearchParams(window.location.search).get("contact") ===
          "success",
      );
    });
  }, []);

  return (
    <section
      className="section section-contact"
      data-reveal
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="container contact-grid">
        <div>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 id="contact-title">{copy.title}</h2>
          <p>{copy.description}</p>
        </div>
        <form
          aria-describedby="contact-privacy"
          aria-label={copy.formTitle}
          action={`${localePath(locale)}?contact=success#contato`}
          className="contact-form"
          data-netlify="true"
          data-netlify-honeypot="company-website"
          method="POST"
          name="portfolio-contact"
        >
          <input name="form-name" type="hidden" value="portfolio-contact" />
          <p className="form-honeypot" aria-hidden="true">
            <label>
              Company website
              <input
                autoComplete="off"
                name="company-website"
                tabIndex={-1}
                type="text"
              />
            </label>
          </p>
          <h3>{copy.formTitle}</h3>
          {sent && (
            <p className="form-success" role="status">
              {copy.success}
            </p>
          )}
          <div className="form-grid">
            <label>
              <span>{copy.name}</span>
              <input
                autoComplete="name"
                maxLength={100}
                name="name"
                required
                type="text"
              />
            </label>
            <label>
              <span>{copy.emailField}</span>
              <input
                autoComplete="email"
                maxLength={160}
                name="email"
                required
                type="email"
              />
            </label>
          </div>
          <label>
            <span>{copy.subject}</span>
            <input maxLength={140} name="subject" required type="text" />
          </label>
          <label>
            <span>{copy.message}</span>
            <textarea
              maxLength={3000}
              minLength={10}
              name="message"
              required
              rows={6}
            />
          </label>
          <div className="form-footer">
            <button className="button" type="submit">
              <Icon name="mail" /> {copy.send}
            </button>
            <small id="contact-privacy">{copy.privacy}</small>
          </div>
        </form>
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
