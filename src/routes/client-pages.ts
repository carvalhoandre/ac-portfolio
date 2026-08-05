import { lazy } from "react";
import type { PortfolioPageComponents } from "../App";

export const clientPages: PortfolioPageComponents = {
  HomePage: lazy(() =>
    import("../pages/HomePage").then(({ HomePage }) => ({ default: HomePage })),
  ),
  NotFoundPage: lazy(() =>
    import("../pages/NotFoundPage").then(({ NotFoundPage }) => ({
      default: NotFoundPage,
    })),
  ),
  ProjectPage: lazy(() =>
    import("../pages/ProjectPage").then(({ ProjectPage }) => ({
      default: ProjectPage,
    })),
  ),
};
