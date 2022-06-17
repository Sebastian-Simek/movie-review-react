import Movie from './Movie';

export default function MovieList({ movies, handleMovieDelete }) {
  return (
    <div>
      {
        movies.map((movie, i) => <Movie 
          key={movie.title + i}
          movie={movie}
          handleMovieDelete={handleMovieDelete}
        />)
      }
    </div>
  );
}
