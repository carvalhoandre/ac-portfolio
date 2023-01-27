import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "normalize.css";

import Loader from "./components/Loader";

ReactDOM.render(
  <React.Suspense
    path="*"
    fallback={<Loader />}
  >
    <App />
  </React.Suspense>,
  document.getElementById("root")
);

reportWebVitals();
