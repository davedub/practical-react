import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Leadership from "../pages/leadership";
import Contact from "../pages/contact";

const Routes = () => {
  ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/leadership" exact component={Leadership} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </Router>
  );
  return (
    Routes();
};
export default Routes;