import React from 'react';

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
        <div>count: {this.state.count}</div>
        <button onClick={this.increment}>increment</button>&nbsp;&nbsp;&nbsp;
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}
