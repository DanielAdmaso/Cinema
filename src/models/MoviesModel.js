import movies from "../assets/db/moviesjson";

function getAllMovies() {
  return new Promise((resolve, reject) => {
    return resolve(movies);
  });
}

function editMovie(obj, movies) {
  return new Promise((resolve, reject) => {
    let tempMovies = movies.map(m => {
      if (m.id === obj.id) {
        m.title = obj.title;
        m.year = obj.year;
        m.actor = obj.actor;
        m.genres = [obj.genres];
        m.minutes = obj.minutes;
        m.storyline = obj.storyline;
      }
      return m;
    });
    return resolve(tempMovies);
  });
}

function deleteMovie(movieId, movies) {
  return new Promise((resolve, reject) => {
    let tempMovies = movies.filter(m => {
      return m.id !== movieId;
    });
    return resolve(tempMovies);
  });
}

let Dal = {
  getAllMovies: getAllMovies,
  editMovie: editMovie,
  deleteMovie: deleteMovie
};

export default Dal;
