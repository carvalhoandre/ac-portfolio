import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { matchPortfolioRoute, type AppRoute } from "./content/routes";
import { clientPages } from "./routes/client-pages";
import "./styles/index.css";

const root = document.getElementById("root");

const routesMatch = (left: AppRoute, right: AppRoute) =>
  left.type === right.type &&
  (left.type !== "project" ||
    (right.type === "project" && left.slug === right.slug));

if (root) {
  const app = (
    <BrowserRouter>
      <App pages={clientPages} />
    </BrowserRouter>
  );
  const current = matchPortfolioRoute(window.location.pathname);
  const prerenderedPath = root.dataset.prerenderPath;
  const prerendered = prerenderedPath
    ? matchPortfolioRoute(prerenderedPath)
    : null;
  const canHydrate = Boolean(
    root.hasChildNodes() &&
    prerendered &&
    current.locale === prerendered.locale &&
    routesMatch(current.route, prerendered.route),
  );

  if (canHydrate) {
    hydrateRoot(root, app);
  } else {
    root.replaceChildren();
    createRoot(root).render(app);
  }
}
