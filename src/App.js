import React from "react";
import { Button } from "reactstrap";
import "./App.css";

import Counter from "./components/Counter";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import Nav from "./components/Nav";

class App extends React.Component {
  state = {
    sliderVisible: true,
    counterVisible: true,
  };

  render() {
    const sliderBtn = this.state.sliderVisible
      ? "Hide Image Slider"
      : "Show Image Slider";
    const counterBtn = this.state.counterVisible
      ? "Hide Counter"
      : "Show Counter";

    return (
      <div>
        <div className="App-header">
          <Header title="My Header" subtitle="My Subheader" />
        </div>
        <div className="AppNav">
          <Nav />
        </div>
        <div className="App-body">
          <br />
          <div className={this.state.sliderVisible ? "visible" : "hidden"}>
            <ImageSlider />
          </div>
          <br />
          <Button
            onClick={() => {
              if (this.state.sliderVisible) {
                this.setState({ sliderVisible: false });
              } else {
                this.setState({ sliderVisible: true });
              }
            }}
          >
            {sliderBtn}
          </Button>
          <br />
          <div className={this.state.counterVisible ? "visible" : "hidden"}>
            <Counter initialCount={0} />
          </div>
          <br />
          <Button
            onClick={() => {
              if (this.state.counterVisible) {
                this.setState({ counterVisible: false });
              } else {
                this.setState({ counterVisible: true });
              }
            }}
          >
            {counterBtn}
          </Button>
        </div>
      </div>
    );
  }
}
export default App;
