import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//import Components
import NavBar from "./components/navBar/navBar";
import Movies from "./components/Movies/Movies";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <div className="mybody">
          <Switch>
            <Route path="/" exact component={Movies} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
