import { useEffect, useRef, useState } from "react";
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
import { Icon } from "./Icon";

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
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const initializedTheme = useRef(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
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

  useEffect(() => {
    if (!open) return;
    const menu = menuRef.current;
    const focusable = menu?.querySelectorAll<HTMLElement>(
      "a[href], button:not([disabled])",
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    first?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
      if (event.key !== "Tab" || !first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href={home}
          aria-label={`AC — ${profile.name} — home`}
        >
          <span aria-hidden="true" className="brand-mark">
            AC
          </span>
          <span className="brand-name">André Carvalho</span>
        </a>

        <div
          className={`nav-shell ${open ? "is-open" : ""}`}
          id="primary-navigation"
          ref={menuRef}
        >
          <nav aria-label={copy.navLabel}>
            <a
              aria-current={route.type === "home" ? "page" : undefined}
              href={homeHref("#inicio")}
              onClick={closeMenu}
            >
              {copy.nav.home}
            </a>
            <a href={homeHref("#projetos")} onClick={closeMenu}>
              {copy.nav.projects}
            </a>
            <a href={homeHref("#especialidades")} onClick={closeMenu}>
              {copy.nav.expertise}
            </a>
            <a href={homeHref("#experiencia")} onClick={closeMenu}>
              {copy.nav.experience}
            </a>
            <a href={homeHref("#sobre")} onClick={closeMenu}>
              {copy.nav.about}
            </a>
          </nav>

          <div className="header-actions">
            <a className="locale-link" href={alternateHref} lang={alternate}>
              <Icon name="globe" />
              {copy.alternateLocaleName}
            </a>
            <button
              className="icon-button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              type="button"
              aria-label={theme === "dark" ? copy.themeLight : copy.themeDark}
            >
              <Icon name={theme === "dark" ? "sun" : "moon"} />
            </button>
            <a
              className="button button-small desktop-contact"
              href={homeHref("#contato")}
            >
              {copy.nav.contact}
            </a>
          </div>

          <button
            aria-label={copy.menuClose}
            className="icon-button menu-close"
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
            }}
            type="button"
          >
            <Icon name="close" />
          </button>
        </div>

        <button
          aria-controls="primary-navigation"
          aria-expanded={open}
          aria-label={copy.menuOpen}
          className="icon-button menu-trigger"
          onClick={() => setOpen(true)}
          ref={triggerRef}
          type="button"
        >
          <Icon name="menu" />
        </button>
      </div>
    </header>
  );
}
