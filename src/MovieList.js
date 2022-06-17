import Movie from './Movie';

export default function MovieList({ movies }) {
  console.log('movies', movies);
  return (
    <div>
      {
        movies.map((movie, i) => <Movie 
          key={movie.title + i}
          movie={movie}
        />)
      }
    </div>
  );
}
