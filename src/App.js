import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";
import SignUp from "./components/signup";

import logo from "./LogoV2.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="UnitedPlanet" target="_blank">
              <img src={logo} width="30" height="30" alt="UnitedPlanet" />
            </a>
            <Link to="/signup" className="navbar-brand">UnitedPlanet</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/signup" className="nav-link">Create New Account</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Sign In</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
