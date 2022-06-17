import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm';
import Movie from './Movie';
import MovieList from './MovieList';


function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState(''); 
  const [movieFormColor, setMovieFormColor] = useState('');

  // I HAVE NO IDEA WHY THIS WORKS!!!!!!!
  function handleMovieDelete(title) {
    const index = allMovies.findIndex(movie => movie.title === title);
    allMovies.splice(index, 1);
    setAllMovies([...allMovies]);
  }

  function handleMovieSubmit(e) {
    e.preventDefault();
    const newMovie = {
      year: movieFormYear,
      director: movieFormDirector,
      title: movieFormTitle,
      color: movieFormColor  
    };
    setAllMovies([...allMovies, newMovie]);
  }

  return (
    <div className="App">
      <header>Welcome to the Movies</header>
      <section className='top-form'>
        <MovieForm 
          setMovieFormDirector={setMovieFormDirector}
          setMovieFormTitle={setMovieFormTitle}
          setMovieFormColor={setMovieFormColor}
          movieFormDirector={movieFormDirector}
          movieFormTitle={movieFormTitle}
          setMovieFormYear={setMovieFormYear}
          handleMovieSubmit={handleMovieSubmit}
          movieFormYear={movieFormYear}
        />
        <Movie
          movie={{
            color: movieFormColor,
            title: movieFormTitle,
            director: movieFormDirector,
            year: movieFormYear
          }} 
        />
      </section>
      <hr/>
      <section className='bottom-display'>
        <MovieList movies={allMovies} handleMovieDelete={handleMovieDelete}/>
      </section>
      <footer>Sebastian Simek 2022</footer>
    </div>
  );
}

export default App;
