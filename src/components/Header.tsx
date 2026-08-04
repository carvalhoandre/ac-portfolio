import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  alternateLocale,
  content,
  localePath,
  profile,
  projectPath,
  type Locale,
  type ProjectSlug,
} from "../content/portfolio";
import type { AppRoute } from "../content/routes";
import { useActiveSection } from "../hooks/useActiveSection";
import { changeLocalePreservingViewport } from "../utils/navigation";
import { BrandLogo } from "./BrandLogo";
import { Icon } from "./Icon";
import { MobileNavigation } from "./MobileNavigation";

interface HeaderProps {
  locale: Locale;
  route: AppRoute;
}

const getTheme = (): "light" | "dark" => {
  if (typeof document === "undefined") return "light";
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
};

export function Header({ locale, route }: HeaderProps) {
  const copy = content[locale];
  const navigate = useNavigate();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const initializedTheme = useRef(false);
  const activeSection = useActiveSection(route.type === "home", "inicio");
  const home = localePath(locale);
  const homeHref = (anchor: string) =>
    route.type === "home" ? anchor : `${home}${anchor}`;
  const alternate = alternateLocale(locale);
  const alternateHref =
    route.type === "project"
      ? projectPath(alternate, route.slug as ProjectSlug)
      : localePath(alternate);

  useEffect(() => {
    let active = true;
    queueMicrotask(() => {
      if (active) setTheme(getTheme());
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (!initializedTheme.current) {
      initializedTheme.current = true;
      return;
    }
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch {
      // The theme still works when storage is unavailable.
    }
  }, [theme]);

  const isCurrent = (section: string) =>
    route.type === "project"
      ? section === "projetos"
      : route.type === "home" && activeSection === section;

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link
            className="brand"
            to={home}
            aria-label={`AC — ${profile.name} — home`}
          >
            <BrandLogo />
          </Link>

          <div className="nav-shell" id="primary-navigation">
            <nav aria-label={copy.navLabel}>
              <Link
                aria-current={isCurrent("inicio") ? "location" : undefined}
                to={homeHref("#inicio")}
              >
                {copy.nav.home}
              </Link>
              <Link
                aria-current={isCurrent("projetos") ? "location" : undefined}
                to={homeHref("#projetos")}
              >
                {copy.nav.projects}
              </Link>
              <Link
                aria-current={isCurrent("npm") ? "location" : undefined}
                to={homeHref("#npm")}
              >
                {copy.nav.npm}
              </Link>
              <Link
                aria-current={
                  isCurrent("especialidades") ? "location" : undefined
                }
                to={homeHref("#especialidades")}
              >
                {copy.nav.expertise}
              </Link>
              <Link
                aria-current={isCurrent("trajetoria") ? "location" : undefined}
                to={homeHref("#trajetoria")}
              >
                {copy.nav.journey}
              </Link>
              <Link
                aria-current={isCurrent("github") ? "location" : undefined}
                to={homeHref("#github")}
              >
                GitHub
              </Link>
            </nav>
          </div>
          <div className="header-actions">
            <Link
              className="locale-link"
              to={alternateHref}
              lang={alternate}
              onClick={(event) => {
                event.preventDefault();
                changeLocalePreservingViewport(alternateHref, navigate);
              }}
            >
              <Icon name="globe" />
              {copy.alternateLocaleName}
            </Link>
            <button
              className="icon-button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              type="button"
              aria-label={theme === "dark" ? copy.themeLight : copy.themeDark}
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} />
            </button>
            <Link
              className="button button-small desktop-contact"
              to={homeHref("#contato")}
            >
              {copy.nav.contact}
            </Link>
          </div>
        </div>
      </header>
      <MobileNavigation locale={locale} route={route} />
    </>
  );
}
