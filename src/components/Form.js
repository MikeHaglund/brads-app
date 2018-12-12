import React, { Component } from "react";
import { Link } from "react-router-dom";

class Form extends Component {
  state = {
    Name: "",
    Password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = JSON.stringify({ ...this.state });
    fetch("localhost: 4000", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application.json"
      }
    });
  };

  render() {
    return (
      <div>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <p>It's the Form</p>

        <form onSubmit={this.handleSubmit}>
          <div class="form-group row">
            <label for="inputPassword" class="col-sm-2 col-form-label">
              Password
            </label>
            <div class="col-sm-10">
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                placeholder="Password"
                onChange={e => this.setState({ Name: e.target.value })}
              />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputName" class="col-sm-2 col-form-label">
              Name
            </label>
            <div class="col-sm-10">
              <input
                type="text"
                class="form-control"
                id="inputPassword"
                placeholder="Your Name"
                onChange={e => this.setState({ Password: e.target.value })}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
