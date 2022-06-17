
export default function MovieForm(props) {
  return (
    <div onSubmit={props.handleMovieSubmit}> 
      <form className="user-inputs">
        <label>
        Movie Title:
          <input required value={props.movieFormTitle} onChange={e => props.setMovieFormTitle(e.target.value)}/>
        </label>
        <label>
        Director:
          <input required value={props.movieFormDirector} onChange={e => props.setMovieFormDirector(e.target.value)}/>
        </label>
        <label>
        Year:
          <input required type='number' value={props.movieFormYear} onChange={e => props.setMovieFormYear(e.target.value)}/>
        </label>
        <label>
        Color:
          <select required onChange={e => props.setMovieFormColor(e.target.value)}>
            <option value="orange">Orange</option>
            <option value="lightblue">Blue</option>
            <option value="lightgreen">Green</option>
            <option value="salmon">Pink</option>
          </select>
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
}
