import "./style.css";

const Catalog = ({ movies, handleClick, selected }) => {
  return (
    <div className="catalog-list">
      <h1 className="mb-4">Catálogo</h1>

      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="column">
            <div
              className={selected.id === movie.id ? "image active" : "image"}
              onClick={() => handleClick(movie)}
              title={movie.title}
            >
              {Boolean(movie.image) && (
                <img src={movie.image} alt={movie.title} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
