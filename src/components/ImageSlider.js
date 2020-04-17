import React from "react";

export default class ImageSlider extends React.Component {
  state = {
    images: [
      "https://practical-react.s3-us-west-2.amazonaws.com/600x450_1.jpg",
      "https://practical-react.s3-us-west-2.amazonaws.com/600x450_2.jpg",
      "https://practical-react.s3-us-west-2.amazonaws.com/600x450_3.jpg",
      "https://practical-react.s3-us-west-2.amazonaws.com/600x450_4.jpg"
    ],
    idx: 0
  };
  slideNext = () => {
    if (this.state.idx > 2) {
      this.setState({
        idx: 0
      });
    } else {
      return this.setState({
        idx: this.state.idx + 1
      });
    }
  };

  render() {
    return (
      <div>
        <img
          style={{
            width: 300,
            height: 225,
            borderColor: "#676fbf",
            borderStyle: "solid"
          }}
          src={this.state.images[this.state.idx]}
        />
        <br />
        <button onClick={this.slideNext}>next</button>
        <button
          onClick={() => {
            this.setState({
              idx: this.state.idx - 1
            });
          }}
        >
          previous
        </button>
      </div>
    );
  }
}
