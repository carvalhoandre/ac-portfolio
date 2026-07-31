import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App, { type PortfolioPageComponents } from "./App";
import {
  getPageMetadata,
  matchPortfolioRoute,
  staticPaths,
} from "./content/routes";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProjectPage } from "./pages/ProjectPage";

export { staticPaths };

const serverPages: PortfolioPageComponents = {
  HomePage,
  NotFoundPage,
  ProjectPage,
};

export function renderPath(pathname: string) {
  const resolved = matchPortfolioRoute(pathname);
  return {
    html: renderToString(
      <StaticRouter location={pathname}>
        <App pages={serverPages} />
      </StaticRouter>,
    ),
    locale: resolved.locale,
    metadata: getPageMetadata(resolved),
  };
}
