import React from "react";
import "./App.css";

import Header from "./components/Header";
import { Nav } from "./components/Nav";
import { Body, Body2 } from "./components/Body";

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
        <body className="App-body">
          <Body
            title="hello from the app"
            num={4532}
            myObj={{
              a: 42333,
              b: 236
            }}
            myFunc={this.add}
            myArr={[303, 493, 291]}
          />
          <Body2 />
        </body>
      </div>
    );
  }
}
export default App;
