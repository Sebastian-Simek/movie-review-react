
export default function MovieForm(props) {
  return (
    <> <form className="user-inputs">
      <label>
        Movie Title:
        <input value={props.movieFormTitle} onChange={e => props.setMovieFormTitle(e.target.value)}/>
      </label>
      <label>
        Director:
        <input value={props.movieFormDirector} onChange={e => props.setMovieFormDirector(e.target.value)}/>
      </label>
      <label>
        Year:
        <input type='number' value={props.movieFormYear} onChange={e => props.setMovieFormYear(e.target.value)}/>
      </label>
      <label>
        Color:
        <select onChange={e => props.setMovieFormColor(e.target.value)}>
          <option value="orange">Orange</option>
          <option value="lightblue">Blue</option>
          <option value="lightgreen">Green</option>
          <option value="salmon">Pink</option>
        </select>
        <button>Submit</button>
      </label>
    </form>
    </>
  );
}
