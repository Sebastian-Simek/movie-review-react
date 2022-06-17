
export default function Movie({ movie, handleMovieDelete }) {
  return ( 
    <div onClick={() => handleMovieDelete(movie.title)}>
      <div style={{ backgroundColor: movie.color }}>
        <h3>{movie.title}</h3>
        <p>{movie.director}</p>
        <p>{movie.year}</p>
      </div>
    </div>
  );
}
