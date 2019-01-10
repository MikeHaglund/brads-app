import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Form from './components/Form'
import People from './components/People'
// import Bootstrap from "bootstrap"
// import Button from "react-bootstrap/lib/Button"
// import {
//   Button,
//   Navbar,
//   NavItem,
//   NavDropdown,
//   MenuItem,
//   Nav
// } from "react-bootstrap";

function Routing() {
  return (
    <Router>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#home">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">
            Link
    </NavItem>
          <NavItem eventKey={2} href="#">
            Link
    </NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>;
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={Form} />
        <Route path="/people" component={People} />
      </Switch >
    </Router> 
  );
}

export default Routing

