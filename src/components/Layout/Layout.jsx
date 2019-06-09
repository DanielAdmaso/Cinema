import NavBar from "../navBar/navBar";
import Footer from "../Footer/Footer";
import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
