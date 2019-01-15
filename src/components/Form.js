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
    fetch("http://localhost:3030", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application.json"
      }
    });
  };

  render() {
    return <div>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <p>Overwatch Survey</p>

        <form onSubmit={this.handleSubmit}>
          <div class="form-group row">
            <label for="inputConsole" class="col-sm-2 col-form-label">
              Console
            </label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="inputConsole" placeholder="What platform do you play on?" onChange={e => this.setState(
                    { Console: e.target.value }
                  )} />
            </div>
          </div>

          <div class="form-group row">
            <label for="inputGamertag" class="col-sm-2 col-form-label">
              Gamertag
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputGamertag" placeholder="What is your Gamertag?" onChange={e => this.setState(
                    { Gamertag: e.target.value }
                  )} />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputRole" class="col-sm-2 col-form-label">
              Role
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputRole" placeholder="DPS? Support? Tank?" onChange={e => this.setState(
                    { Role: e.target.value }
                  )} />
            </div>
          </div>
        <div class="form-group row">
          <label for="inputMain" class="col-sm-2 col-form-label">
            Main
            </label>
          <div class="col-sm-10">
            <input
              type="text"
              class="form-control"
              id="inputMain"
              placeholder="Which hero/heroes do you main?"
              onChange={e => this.setState({ Main: e.target.value })}
            />
          </div>
        </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>;
  }
}

export default Form;
