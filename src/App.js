import './App.css';
import { useState } from 'react';


function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState(''); 
  const [movieFormColor, setMovieFormColor] = useState('');



  return (
    <div className="App">
      
      <footer>Sebastian Simek 2022</footer>
    </div>
  );
}

export default App;
