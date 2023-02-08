import React from "react";
import "./assets/styles/index.css";

import Header from "./components/header";
import MovieDetails from "./components/movie-details";
import Catalog from "./components/catalog";

import database from "./assets/db";

class App extends React.Component {
  state = {
    movie: database[0],
    movies: database,
  };

  setNewMovie(movie) {
    this.setState({
      movie,
    });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <MovieDetails movie={this.state.movie} />
        <Catalog
          movies={this.state.movies}
          selected={this.state.movie}
          handleClick={this.setNewMovie.bind(this)}
        />
      </div>
    );
  }
}

export default App;
