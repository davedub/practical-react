import React from "react";
import { Button } from "reactstrap";
import "../../App.css";

import Counter from "../../components/Counter";
import ImageSlider from "../../components/ImageSlider";

export default class Home extends React.Component {
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
        <h4>Website Home</h4>
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
    );
  }
}
