/* eslint flowtype-errors/show-errors: 0 */
import React from "react";
import { Switch, Route } from "react-router";
import App from "./containers/App";
import HomePage from "./containers/HomePage";
import CounterPage from "./containers/CounterPage";
import GraphPage from "./containers/GraphPage";
import TablePage from "./containers/TablePage";

export default () => (
  <App>
    <Switch>
      <Route path="/counter" component={CounterPage} />
      <Route path="/graph" component={GraphPage} />
      <Route path="/table" component={TablePage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
