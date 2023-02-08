import "./style.css";

const MovieDetails = ({ movie }) => {
  return (
    <section className="movie-section mb-5">
      <div className="movie-image">
        <img src={movie.image} alt={movie.title} />
      </div>
      <div className="info">
        <div className="flex space-between align-center mb-3">
          <div className="title">{movie.title}</div>
          <div className="director">Diretor: {movie.director}</div>
        </div>
        <div className="ratting mb-1">{movie.IMDB}</div>
        <div className="summary">{movie.bio}</div>
      </div>
    </section>
  );
};

export default MovieDetails;
