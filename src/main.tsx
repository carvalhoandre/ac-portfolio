import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { resolveRoute } from "./content/routes";
import "./styles/index.css";

const root = document.getElementById("root");
const resolved = resolveRoute(window.location.pathname);

if (root) {
  const app = <App locale={resolved.locale} route={resolved.route} />;
  if (root.hasChildNodes()) {
    hydrateRoot(root, app);
  } else {
    createRoot(root).render(app);
  }
}
