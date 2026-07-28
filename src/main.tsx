/* eslint-disable react-refresh/only-export-components */
import { useEffect, useState } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { resolveRoute } from "./content/routes";
import "./styles/index.css";

const root = document.getElementById("root");
const resolved = resolveRoute(window.location.pathname);

function PortfolioRoot() {
  const [current, setCurrent] = useState(resolved);

  useEffect(() => {
    const handleNavigation = () =>
      setCurrent(resolveRoute(window.location.pathname));
    window.addEventListener("popstate", handleNavigation);
    return () => window.removeEventListener("popstate", handleNavigation);
  }, []);

  return <App locale={current.locale} route={current.route} />;
}

if (root) {
  const app = <PortfolioRoot />;
  if (root.hasChildNodes()) {
    hydrateRoot(root, app);
  } else {
    createRoot(root).render(app);
  }
}
