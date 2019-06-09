import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./navBar.css";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
class NavBar extends Component {
  state = {};

  render() {
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <Link className="icon" to="/">
              Cinema
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route path="/" exact component={Movies} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default NavBar;
