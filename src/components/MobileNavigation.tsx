import { content, localePath, type Locale } from "../content/portfolio";
import type { AppRoute } from "../content/routes";
import { useActiveSection, type HomeSection } from "../hooks/useActiveSection";
import { Icon } from "./Icon";
import { Link } from "react-router-dom";

interface MobileNavigationProps {
  locale: Locale;
  route: AppRoute;
}

export function MobileNavigation({ locale, route }: MobileNavigationProps) {
  const copy = content[locale];
  const active = useActiveSection(route.type === "home", "inicio");
  const home = localePath(locale);
  const homeHref = (anchor: HomeSection) =>
    route.type === "home" ? `#${anchor}` : `${home}#${anchor}`;
  const current = route.type === "project" ? "projetos" : active;
  const items = [
    { id: "inicio", label: copy.nav.home, icon: "home" as const },
    { id: "projetos", label: copy.nav.projects, icon: "grid" as const },
    { id: "npm", label: copy.nav.npm, icon: "code" as const },
    {
      id: "especialidades",
      label: copy.nav.mobileExpertise,
      icon: "code" as const,
    },
    { id: "github", label: "GitHub", icon: "github" as const },
    { id: "contato", label: copy.nav.contact, icon: "mail" as const },
  ] satisfies Array<{
    id: HomeSection;
    label: string;
    icon: "home" | "grid" | "code" | "github" | "mail";
  }>;

  return (
    <nav className="mobile-navigation" aria-label={copy.mobileNavLabel}>
      {items.map((item) => (
        <Link
          aria-current={current === item.id ? "location" : undefined}
          aria-label={item.label}
          className={item.id === "contato" ? "mobile-nav-contact" : undefined}
          to={homeHref(item.id)}
          key={item.id}
        >
          <Icon name={item.icon} />
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
