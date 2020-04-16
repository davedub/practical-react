import React from "react";
import logo from "../logo.svg";

export class Body extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.props.num}</p>
        <p>{this.props.myObj.a + this.props.myObj.b}</p>
        <p>{this.props.myFunc(6454, 3222)}</p>
        <p>
          {(this.props.myArr[0] + this.props.myArr[2]) / this.props.myArr[1]}
        </p>{" "}
        Edit <code> src / App.js </code> and save to reload.{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>
      </div>
    );
  }
}
export const Body2 = () => (
  <div>
    <h2> Hi this is Body2</h2>
  </div>
);
