import {
  content,
  localePath,
  profile,
  type Locale,
} from "../content/portfolio";
import { Icon } from "./Icon";
import { BrandLogo } from "./BrandLogo";
import { Link } from "react-router-dom";

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const copy = content[locale];
  const home = localePath(locale);

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link className="footer-name" to={home}>
            <BrandLogo />
          </Link>
          <p>{copy.footer.role}</p>
        </div>
        <div className="footer-social" aria-label="Social links">
          <a href={profile.linkedin} rel="noreferrer" target="_blank">
            <Icon name="linkedin" /> LinkedIn
          </a>
          <a href={profile.github} rel="noreferrer" target="_blank">
            <Icon name="github" /> GitHub
          </a>
          <a href={`mailto:${profile.email}`}>
            <Icon name="mail" /> Email
          </a>
        </div>
        <Link className="footer-top" to={home}>
          {copy.footer.top} <span aria-hidden="true">↑</span>
        </Link>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}. {copy.footer.rights}
        </span>
        <span>
          {copy.localeName} · {copy.footer.role}
        </span>
      </div>
    </footer>
  );
}
