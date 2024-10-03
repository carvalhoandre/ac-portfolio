import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import i18n from "./locale/i18n.ts";

import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
}
