import React from 'react';
import logo from './logo.svg';
import './App.css';

// eslint-disable-next-line no-undef
class Header extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.num}</p>
        <p>{this.props.myObj.a + this.props.myObj.b}</p>
        <div>{this.props.myFunc(6454, 3222)}</div>
        <p>
          {(this.props.myArr[0] + this.props.myArr[2]) / this.props.myArr[1]}
        </p>
      </div>
    );
  }
}

const Body = () => (
  <div>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code> src / App.js </code> and save to reload.{' '}
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React{' '}
    </a>
  </div>
);

class App extends React.Component {
  add(a, b) {
    return a + b;
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <Header
            title="hello from the app"
            num={4532}
            myObj={{
              a: 523,
              b: 236,
            }}
            myFunc={this.add}
            myArr={[303, 493, 291]}
          />
        </header>
        <body className="App-body">
          <Body />
        </body>
      </div>
    );
  }
}

export default App;
