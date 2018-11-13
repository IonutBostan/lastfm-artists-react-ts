import React from "react";
import { Redirect, Route, Router, Switch } from "react-router";
import { history } from "./history";
import Landing from "./pages/Landing";

class App extends React.Component<{}, {}> {
  public render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Switch>
            <Route exact={true} path="/:country" component={Landing} />
            <Redirect to="/spain" />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
