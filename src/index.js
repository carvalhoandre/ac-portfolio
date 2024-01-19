import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "normalize.css";

import Routes from "./Routes";
import Loader from "./components/Loader";

import './App.css';

ReactDOM.render(
  <React.Suspense fallback={<Loader />}>
    <Routes />
  </React.Suspense>,
  document.getElementById("root")
);

reportWebVitals();
