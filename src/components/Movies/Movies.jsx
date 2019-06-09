import React, { Component } from "react";
//import models
import MoviesModel from "../../models/MoviesModel";
//import components
import MovieCard from "../MovieCard/MovieCard";
import Search from "../Search/Search";

class Movies extends Component {
  state = {
    movies: [],
    searchMovies: []
  };

  componentDidMount() {
    MoviesModel.getAllMovies().then(movies => {
      this.setState({ movies: movies, searchMovies: movies });
    });
  }

  editMovie = obj => {
    MoviesModel.editMovie(obj, this.state.movies).then(tempMovies => {
      this.setState({ movies: tempMovies, searchMovies: tempMovies });
    });
  };

  deleteMovie = movieId => {
    MoviesModel.deleteMovie(movieId, this.state.movies).then(tempMovies => {
      this.setState({ movies: tempMovies, searchMovies: tempMovies });
    });
  };

  handleSearch = search => {
    let tempMovies = this.state.movies.filter(m => {
      return m.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
    this.setState({ searchMovies: tempMovies });
  };

  render() {
    let MovieCards = this.state.searchMovies.map(m => {
      return (
        <MovieCard
          key={m.id}
          movie={m}
          editMovie={obj => this.editMovie(obj)}
          deleteMovie={movieId => this.deleteMovie(movieId)}
        />
      );
    });
    return (
      <div>
        <Search handleSearch={search => this.handleSearch(search)} />
        {MovieCards}
      </div>
    );
  }
}

export default Movies;
