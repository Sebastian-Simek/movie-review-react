import './App.css';
import { useState } from 'react';
import MovieForm from './MovieForm';
import Movie from './Movie';


function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(allMovies);
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState(''); 
  const [movieFormColor, setMovieFormColor] = useState('');

  console.log(movieFormYear);

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
      <section>
        {/* <Movie /> */}
      </section>
      <footer>Sebastian Simek 2022</footer>
    </div>
  );
}

export default App;
