import React from 'react';

import './App.css';
import logo from './logo.svg';

// eslint-disable-next-line no-undef

class Header extends React.Component {
  render () {
    return <h4>{this.props.title}</h4>;
  }
}

class Nav extends React.Component {
  render () {
    return (
      <div className="AppNav">
        <ul className="nav">
          <a
            className="Nav-link"
            href="/leadership"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Leadership</li>
          </a>
          <a
            className="Nav-link"
            href="/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>About</li>
          </a>
          <a
            className="Nav-link"
            href="/contact-us"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>Contact Us</li>
          </a>
        </ul>
      </div>
    );
  }
}

class Body extends React.Component {
  render () {
    return (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.props.num}</p>
        <p>{this.props.myObj.a + this.props.myObj.b}</p>
        <p>{this.props.myFunc (6454, 3222)}</p>
        <p>
          {(this.props.myArr[0] + this.props.myArr[2]) / this.props.myArr[1]}
        </p>{' '}

        {' '}
        Edit <code> src / App.js </code> and save to reload.{' '}
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
  }
}

class App extends React.Component {
  add (a, b) {
    return a + b;
  }
  render () {
    return (
      <div>
        <div className="App-header">
          <Header title="My Header" />
        </div>
        <div className="AppNav">
          <Nav />
        </div>
        <body className="App-body">
          <Body
            title="hello from the app"
            num={4532}
            myObj={{
              a: 42333,
              b: 236,
            }}
            myFunc={this.add}
            myArr={[303, 493, 291]}
          />
        </body>
      </div>
    );
  }
}
export default App;
