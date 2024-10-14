import { lazy, Suspense } from "react";

import {
  BrowserRouter,
  Route,
  Routes as BrowserRouterRoutes,
} from "react-router-dom";

const Home = lazy(() => import("@pages/Home"));

import { ErrorBoundary, Lazy, Loader } from "@components/index";

const handleLoader = () => <Loader />;

const Routes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={handleLoader()}>
        <ErrorBoundary>
          <BrowserRouterRoutes>
            <Route index path="*" element={<Lazy component={Home} />} />
          </BrowserRouterRoutes>
        </ErrorBoundary>
      </Suspense>
    </BrowserRouter>
  );
};

export { Routes };
