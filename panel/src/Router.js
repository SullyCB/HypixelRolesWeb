import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";



class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;
