import React, { useState, Suspense } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "normalize.css";

import Routes from "./Routes";
import Loader from "./components/Loader";

import { getTheme } from "./services/theme";

import "./App.css";

const App = () => {
  const [theme] = useState(getTheme());

  return (
    <body  className={`${theme === "light" ? "" : "dark-theme"}`}>
      <Routes />
    </body >
  );
};

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);

reportWebVitals();
