import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router";

//import Components
// import Layout from "./components/Layout/Layout";
// import Movies from "./components/Movies/Movies";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <div className="app">
      <NavBar />
      {/* <Layout>
          <Router history={this.props.history}>
            <Switch>
              <Route path="/" exact component={Movies} />
            </Switch>
          </Router>
        </Layout> */}
    </div>
  );
}

export default App;
