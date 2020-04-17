import React from "react";
import "./App.css";

import Header from "./components/Header";
import { Nav } from "./components/Nav";
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter";

class App extends React.Component {
  add(a, b) {
    return a + b;
  }
  render() {
    return (
      <div>
        <div className="App-header">
          <Header title="My Header" />
        </div>
        <div className="AppNav">
          <Nav />
        </div>
        <div className="App-body">
          <br />
          <ImageSlider />
          <br />
          <Counter initialCount={0} />
          <br />
          <Counter initialCount={1000} />
        </div>
      </div>
    );
  }
}
export default App;
