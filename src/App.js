import React from 'react';

import {Button} from 'reactstrap';

import './App.css';

import Counter from './components/Counter';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import {Nav} from './components/Nav';

class App extends React.Component {
  state = {
    visible: true,
  };

  render() {
    let slider = this.state.visible ? <ImageSlider /> : <div> I am hidden</div>;
    if (!this.state.visible) {
      slider = <div>display nothing</div>;
    }
    const buttonText = this.state.visible ? 'Hide' : 'Show';

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
              this.setState({visible: !this.state.visible});
            }}
          >
            {buttonText}
          </Button>
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
