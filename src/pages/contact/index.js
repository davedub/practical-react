import React from "react";
import WebForm from "../../components/webform";

export default class Contact extends React.Component {
  render() {
    return (
      <div>
        <h2>Contact Us</h2>
        <p>
          Subway tile biodiesel forage cloud bread, portland asymmetrical
          flexitarian messenger bag 90's tilde pickled bespoke williamsburg
          vinyl banjo.
        </p>
        <div className="Webform">
          <WebForm />
        </div>
      </div>
    );
  }
}
