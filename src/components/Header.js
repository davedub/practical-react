import React from "react";

// eslint-disable-next-line no-undef

class Header extends React.Component {
  render() {
    return (
      <div>
        <a href="/">
          <h2>{this.props.title}</h2>
          <p>{this.props.subtitle}</p>
        </a>
      </div>
    );
  }
}
export default Header;
