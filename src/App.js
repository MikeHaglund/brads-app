import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import Routing from './Routing'

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hi Dad</p>
        <Routing/>
      </div>
    );
  }
}

export default App;
