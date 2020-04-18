import React from 'react';

import {Button} from 'reactstrap';
// eslint-disable-next-line no-undef

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <div>
        <div id="count">Count: {this.state.count}</div>
        <Button color="primary" onClick={this.increment}>
          Increase
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button color="primary" onClick={this.decrement}>
          Decrease
        </Button>
      </div>
    );
  }
}
