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
        <body>
          <p>Hi Dad</p>
          <img src="https://vignette.wikia.nocookie.net/overwatch/images/2/2e/Hero_Gallery.png/revision/latest?cb=20171012190812" 
          alt="Heroes" width="550" height="300" />
        </body>
        <Routing />
      </div>
    );
  }
}

export default App;
