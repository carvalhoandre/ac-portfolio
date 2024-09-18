import { lazy, Suspense } from "react";

import {
  BrowserRouter,
  Route,
  Routes as BrowserRouterRoutes,
} from "react-router-dom";

const Home = lazy(() => import("@pages/Home"));

import Loader from "@components/Loader";

const handleLoader = () => <Loader />;

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={handleLoader()}>
        <BrowserRouterRoutes>
          <Route index path="*" element={<Home />} />
        </BrowserRouterRoutes>
      </Suspense>
    </BrowserRouter>
  );
};

export { Routes };