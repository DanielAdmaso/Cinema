import React, { Component } from "react";
import "./MovieCard.css";
import deleteImg from "../../assets/images/delete.png";
class MovieCard extends Component {
  state = {
    id: this.props.movie.id,
    title: this.props.movie.title,
    year: this.props.movie.year,
    actor: this.props.movie.actor,
    genres: this.props.movie.genres,
    minutes: this.props.movie.minutes,
    storyline: this.props.movie.storyline,
    message: "",
    isOpen: false
  };

  updateInputs = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = e => {
    e.preventDefault();
    if (this.state.year >= 1980 && this.state.year <= 2022) {
      if (
        this.state.title === "" ||
        this.state.actor === "" ||
        this.state.genres === "" ||
        this.state.minutes === "" ||
        this.state.storyline === ""
      ) {
        this.setState({
          message:
            "Pay attention! some of the field empty so there is no change."
        });
        setTimeout(() => {
          this.setState({
            message: ""
          });
        }, 5000);
      } else {
        this.setState({
          message: ""
        });
      }
      let obj = {
        id: this.state.id,
        title:
          this.state.title === "" ? this.props.movie.title : this.state.title,
        year: this.state.year === "" ? this.props.movie.year : this.state.year,
        actor:
          this.state.actor === "" ? this.props.movie.actor : this.state.actor,
        genres:
          this.state.genres === ""
            ? this.props.movie.genres
            : this.state.genres,
        minutes:
          this.state.minutes === ""
            ? this.props.movie.minutes
            : this.state.minutes,
        storyline:
          this.state.storyline === ""
            ? this.props.movie.storyline
            : this.state.storyline
      };
      this.props.editMovie(obj);
    }
  };

  deleteMovie = movieId => {
    this.props.deleteMovie(movieId);
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    let yearError = "";
    if (this.state.year >= 1980 && this.state.year <= 2022) {
      yearError = "";
    } else {
      yearError = "Year must be between 1980 to 2022.";
    }

    return (
      <div>
        <div className="movie_card" id="bright">
          <div className="info_section">
            <div className="movie_header">
              <img
                className="locandina"
                alt="not found"
                src={this.props.movie.poster}
              />
              <h1>{this.props.movie.title}</h1>
              <h4>
                {this.props.movie.year}, {this.props.movie.actor}
              </h4>
              <span className="minutes">{this.props.movie.minutes} min</span>
              <p className="type">
                {this.props.movie.genres.map(g => g + ",")}
              </p>
            </div>
            <div className="movie_desc">
              <p className="text">{this.props.movie.storyline}</p>
            </div>
            <div className="movie_social">
              <ul>
                <li>
                  <i
                    title="Watch Trailer"
                    data-toggle="modal"
                    data-target={`#${this.props.movie.name}trailer`}
                    className="fa fa-play"
                    style={{ fontSize: "24px" }}
                  />
                </li>
                <li>
                  <i
                    title="Edit"
                    data-toggle="modal"
                    data-target={`#${this.props.movie.name}`}
                    className="fa fa-edit"
                    style={{ fontSize: "24px" }}
                  />
                </li>
                <li>
                  <i
                    title="Delete"
                    data-toggle="modal"
                    data-target={`#${this.props.movie.name}delete`}
                    className="fa fa-remove"
                    style={{ fontSize: "24px" }}
                  />
                </li>
              </ul>
            </div>
          </div>
          <div
            className="blur_back bright_back"
            style={{ backgroundImage: `url(${this.props.movie.posterurl})` }}
          />
        </div>

        <div className="modal" id={this.props.movie.name}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Edit {this.props.movie.title}</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={this.updateInputs}
                  value={this.state.title}
                />
                <input
                  type="number"
                  name="year"
                  placeholder="Year"
                  onChange={this.updateInputs}
                  min={1980}
                  max={2022}
                  value={this.state.year}
                />
                <span className="message">{yearError}</span>
                <input
                  type="text"
                  name="actor"
                  placeholder="Actor"
                  onChange={this.updateInputs}
                  value={this.state.actor}
                />
                <input
                  type="text"
                  name="genres"
                  placeholder="Genres"
                  onChange={this.updateInputs}
                  value={this.state.genres}
                />
                <input
                  type="number"
                  name="minutes"
                  placeholder="Minutes"
                  min={10}
                  max={500}
                  onChange={this.updateInputs}
                  value={this.state.minutes}
                />
                <input
                  type="text"
                  name="storyline"
                  placeholder="StoryLine"
                  onChange={this.updateInputs}
                  value={this.state.storyline}
                />
                <span className="message">{this.state.message}</span>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={this.submit}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal" id={this.props.movie.name + "trailer"}>
          <iframe
            src={this.props.movie.trailer}
            frameBorder="0"
            allowFullScreen="allowfullscreen"
          />
        </div>

        <div className="modal" id={this.props.movie.name + "delete"}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Delete {this.props.movie.title}</h4>
                <button type="button" className="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div className="modal-body" />
              <img src={deleteImg} className="deleteImg" />
              <span className="sureToDelete">
                Are you sure you want to delete this movie?
              </span>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.deleteMovie(this.props.movie.id)}
                  data-dismiss="modal"
                >
                  Delete
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
