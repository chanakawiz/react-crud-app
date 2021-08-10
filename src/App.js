import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Create from "./components/create.components";
import Edit from "./components/edit.components";
import Index from "./components/edit.components";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={"/"} className="navbar-brand">
              React Crud Example
            </Link>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/create"} className="nav-link">
                    create
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/index"} className="nav-link">
                    Index
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <h2> Welcome to react crud by chanaka</h2>
          <br />

          <Switch>
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/index" component={Index} />
            <Route exact path="/create" component={Create} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
