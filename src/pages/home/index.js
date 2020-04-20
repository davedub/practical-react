import React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <div className="AppNav">
        <ul className="nav">
          <a className="Nav-link" href="/leadership" rel="noopener noreferrer">
            <li>Leadership</li>
          </a>
          <a className="Nav-link" href="/about" rel="noopener noreferrer">
            <li>About</li>
          </a>
          <a className="Nav-link" href="/contact" rel="noopener noreferrer">
            <li>Contact Us</li>
          </a>
        </ul>
      </div>
    );
  }
}
