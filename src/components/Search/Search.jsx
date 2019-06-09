import React, { Component } from "react";
import "./Search.css";
class Search extends Component {
  state = {
    // search: ""
  };

  updateInput = e => {
    // this.setState({ [e.target.name]: e.target.value });
    this.props.handleSearch(e.target.value);
  };

  render() {
    return (
      <div>
        <div className="form">
          <input type="search" name="search" onChange={this.updateInput} />
          <i class="fa fa-search" />
        </div>
      </div>
    );
  }
}

export default Search;
