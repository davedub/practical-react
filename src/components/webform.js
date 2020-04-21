import React from "react";

export default class WebForm extends React.Component {
  state = {
    name: "",
    message: "",
    rememberMe: false,
    ageRange: "21-34",
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };
  handleChangeMessage = (event) => {
    this.setState({ message: event.target.value });
  };
  handleRememberMe = (event) => {
    console.log(event.target.value);
    this.setState({ rememberMe: event.target.checked });
  };
  handleAgeRange = (event) => {
    console.log(event.target.value);
    this.setState({ ageRange: event.target.value });
  };
  handleSubmit = () => {
    console.log(this.state);
  };
  render() {
    return (
      <div className="webForm">
        <input value={this.state.name} onChange={this.handleChangeName} />
        <br />
        <textarea
          value={this.state.Message}
          onChange={this.handleChangeMessage}
        />
        <br />
        <input
          type="checkbox"
          checked={this.state.rememberMe}
          onChange={this.handleRememberMe}
        />
        <div>
          <select value={this.state.ageRange} onChange={this.handleAgeRange}>
            <option>Age 21-34</option>
            <option>Age 35-48</option>
            <option>Age 49-57</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
