import React from "react";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Leadership from "./pages/leadership";
import About from "./pages/about";
import Contact from "./pages/contact";

const Container = () => {
  return (
    <div className="App-body">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/leadership" exact component={Leadership} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </Router>
    </div>
  );
};
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <Header title="My Header" subtitle="My Subheader" />
        </div>
        <div className="AppNav">
          <Navbar />
        </div>
        <div className="App-body">
          <br />
          <Container />
        </div>
      </div>
    );
  }
}
export default App;
