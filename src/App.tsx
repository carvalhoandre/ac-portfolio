import { useEffect } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MotionController } from "./components/MotionController";
import { content, type Locale } from "./content/portfolio";
import { getPageMetadata, type AppRoute } from "./content/routes";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage } from "./pages/ProjectPage";

interface AppProps {
  locale: Locale;
  route: AppRoute;
}

export default function App({ locale, route }: AppProps) {
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
      <MotionController key={`${locale}-${route.type}`} />
      {route.type === "home" && <HomePage locale={locale} />}
      {route.type === "project" && (
        <ProjectPage locale={locale} slug={route.slug} />
      )}
      {route.type === "notFound" && <NotFoundPage locale={locale} />}
      <Footer locale={locale} />
    </>
  );
}
