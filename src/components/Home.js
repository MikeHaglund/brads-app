import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return <div>
        <li>
          <Link to="/people">People</Link>
        </li>
      <li>
        <Link to="/form">Form</Link>
        </li>
        <p>It's the Home Page</p>
      </div>;
  }
}

export default Home;
