import {
  Suspense,
  useEffect,
  useMemo,
  type ComponentType,
  type LazyExoticComponent,
  type ReactNode,
} from "react";
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MotionController } from "./components/MotionController";
import { content, type Locale, type ProjectSlug } from "./content/portfolio";
import {
  getPageMetadata,
  isProjectSlug,
  matchPortfolioRoute,
  type AppRoute,
} from "./content/routes";

type PageComponent<Props> =
  ComponentType<Props> | LazyExoticComponent<ComponentType<Props>>;

export interface PortfolioPageComponents {
  HomePage: PageComponent<{ locale: Locale }>;
  NotFoundPage: PageComponent<{ locale: Locale }>;
  ProjectPage: PageComponent<{ locale: Locale; slug: ProjectSlug }>;
}

interface PortfolioShellProps {
  children: ReactNode;
  locale: Locale;
}

function PortfolioShell({ children, locale }: PortfolioShellProps) {
  const location = useLocation();
  const route = useMemo<AppRoute>(() => {
    const resolved = matchPortfolioRoute(location.pathname);
    return resolved.locale === locale ? resolved.route : { type: "notFound" };
  }, [locale, location.pathname]);
  const skip = content[locale].skip;

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = getPageMetadata({ locale, route }).title;
  }, [locale, route]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {skip}
      </a>
      <Header locale={locale} route={route} />
      <Suspense fallback={null}>
        {children}
        <MotionController key={`${locale}-${location.pathname}`} />
      </Suspense>
      <Footer locale={locale} />
    </>
  );
}

function PortfolioLayout({ locale }: { locale: Locale }) {
  return (
    <PortfolioShell locale={locale}>
      <Outlet />
    </PortfolioShell>
  );
}

interface ProjectRouteProps {
  locale: Locale;
  pages: PortfolioPageComponents;
}

function ProjectRoute({ locale, pages }: ProjectRouteProps) {
  const { slug } = useParams();

  if (!isProjectSlug(slug)) {
    return <pages.NotFoundPage locale={locale} />;
  }

  return <pages.ProjectPage locale={locale} slug={slug} />;
}

interface FallbackRouteProps {
  pages: PortfolioPageComponents;
}

function FallbackRoute({ pages }: FallbackRouteProps) {
  return (
    <PortfolioShell locale="pt-BR">
      <pages.NotFoundPage locale="pt-BR" />
    </PortfolioShell>
  );
}

export interface AppProps {
  pages: PortfolioPageComponents;
}

export default function App({ pages }: AppProps) {
  return (
    <Routes>
      <Route
        caseSensitive={false}
        path="/"
        element={<PortfolioLayout locale="pt-BR" />}
      >
        <Route index element={<pages.HomePage locale="pt-BR" />} />
      </Route>

      <Route
        caseSensitive={false}
        path="/pt-BR"
        element={<PortfolioLayout locale="pt-BR" />}
      >
        <Route index element={<pages.HomePage locale="pt-BR" />} />
        <Route
          path="projetos/:slug"
          element={<ProjectRoute locale="pt-BR" pages={pages} />}
        />
        <Route path="*" element={<pages.NotFoundPage locale="pt-BR" />} />
      </Route>

      <Route
        caseSensitive={false}
        path="/en"
        element={<PortfolioLayout locale="en" />}
      >
        <Route index element={<pages.HomePage locale="en" />} />
        <Route
          path="projects/:slug"
          element={<ProjectRoute locale="en" pages={pages} />}
        />
        <Route path="*" element={<pages.NotFoundPage locale="en" />} />
      </Route>

      <Route path="*" element={<FallbackRoute pages={pages} />} />
    </Routes>
  );
}
