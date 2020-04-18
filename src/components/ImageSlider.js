import React from 'react';

import {Button} from 'reactstrap';
export default class ImageSlider extends React.Component {
  state = {
    images: [
      'https://practical-react.s3-us-west-2.amazonaws.com/600x450_1.jpg',
      'https://practical-react.s3-us-west-2.amazonaws.com/600x450_2.jpg',
      'https://practical-react.s3-us-west-2.amazonaws.com/600x450_3.jpg',
      'https://practical-react.s3-us-west-2.amazonaws.com/600x450_4.jpg',
    ],
    idx: 0,
  };
  slideNext = () => {
    if (this.state.idx > 2) {
      this.setState({
        idx: 0,
      });
    } else {
      return this.setState({
        idx: this.state.idx + 1,
      });
    }
  };
  slidePrev = () => {
    if ((this.state.idx < 0) | (this.state.idx === 0)) {
      this.setState({
        idx: 3,
      });
    } else {
      return this.setState({
        idx: this.state.idx - 1,
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
            borderColor: '#676fbf',
            borderStyle: 'solid',
          }}
          alt=""
          src={this.state.images[this.state.idx]}
        />
        <br />
        <div className="spaced-out">
          <Button className="img-button" color="info" onClick={this.slideNext}>
            next
          </Button>
          <Button className="img-button" color="info" onClick={this.slidePrev}>
            previous
          </Button>
        </div>
      </div>
    );
  }
}
