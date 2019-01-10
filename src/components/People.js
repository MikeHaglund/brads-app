import React, { Component } from "react";
import { Link } from "react-router-dom";

class People extends Component {
  render() {
    return (
      <div>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <p>Hello People</p>
      </div>
    );
  }
}

export default People;
