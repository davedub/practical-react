import React from 'react';

import {Button} from 'reactstrap';

import './App.css';

import Counter from './components/Counter';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import {Nav} from './components/Nav';

class App extends React.Component {
  state = {
    sliderVisible: true,
    counterVisible: true,
  };

  render() {
    let slider = this.state.sliderVisible ? (
      <ImageSlider />
    ) : (
      <div> I am hidden</div>
    );
    if (!this.state.sliderVisible) {
      slider = <div>Image Slider is hidden</div>;
    }
    const sliderBtn = this.state.sliderVisible ? 'Hide' : 'Show';

    let counter = this.state.counterVisible ? (
      <Counter initialCount={0} />
    ) : (
      <div> Counter is hidden</div>
    );
    if (!this.state.counterVisible) {
      counter = <div>Counter is hidden</div>;
    }
    const counterBtn = this.state.counterVisible ? 'Hide' : 'Show';

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
          {slider}
          <br />
          <Button
            onClick={() => {
              if (this.state.sliderVisible) {
                this.setState({sliderVisible: false});
              } else {
                this.setState({sliderVisible: true});
              }
            }}
          >
            {sliderBtn}
          </Button>
          <br />
          {counter}
          <Button
            onClick={() => {
              if (this.state.counterVisible) {
                this.setState({counterVisible: false});
              } else {
                this.setState({counterVisible: true});
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
