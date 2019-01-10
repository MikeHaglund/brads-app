import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
// import { ApolloProvider } from 'react-apollo'
// import ApolloClient from 'apollo-boost'
import Home from "./components/Home";
import Form from "./components/Form";
import People from "./components/People";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <Router>
    <Fragment>
      <nav className="pa3 pa4-ns">
        <Link className="link dim black b f6 f5-ns dib mr3" to="/" title="Home">
          Home
        </Link>
      </nav>

      <nav className="pa3 pa4-ns">
        <Link
          className="link dim black b f6 f5-ns dib mr3"
          to="/Form"
          title="Form"
        >
          Form
        </Link>
      </nav>
      <nav className="pa3 pa4-ns">
        <Link
          className="link dim black b f6 f5-ns dib mr3"
          to="/People"
          title="People"
        >
          People
        </Link>
      </nav>

      <div className="fl w-100 pl4 pr4">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Form" component={Form} />
          <Route exact path="/People" component={People} />
        </Switch>
      </div>
    </Fragment>
  </Router>,

  document.getElementById("root")
);

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
