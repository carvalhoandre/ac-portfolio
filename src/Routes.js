import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home"));

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*" exact>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
