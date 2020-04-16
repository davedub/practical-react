import React from "react";

export class Nav extends React.Component {
  render() {
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
