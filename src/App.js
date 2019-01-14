import React, { Component } from "react";
// import "./App.css";
// import Home from "./components/Home";
import Routing from "./Routing";
import Navbar from "./Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <p>Hi Dad</p>
        <Routing />
      </div>
    );
  }
}

export default App;
