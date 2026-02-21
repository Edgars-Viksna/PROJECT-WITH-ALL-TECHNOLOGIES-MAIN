import { useState, type FormEvent, type JSX } from "react";
import { useDispatch } from "react-redux";

export default function MovieCreation(): JSX.Element {
  const [title, setTitle] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [country, setCountry] = useState<string>("");
  const today = new Date().toISOString().substring(0, 10);
  const [releaseDate, setReleaseDate] = useState<string>(today);
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();

  function clearInputsAndErrors(): void {
    setTitle("");
    setGenre("");
    setCountry("");
    setReleaseDate(today);
    setError("");
  }

  function validateInputs(): boolean {
    if (title.trim() === "") {
      setError("Title is required field");
      return false;
    }
    if (genre.trim() === "") {
      setError("Genre is required field");
      return false;
    }

    if (country.trim() === "") {
      setError("Country is required field");
      return false;
    }
    return true;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (validateInputs()) {
      dispatch({
        type: "movies/add",
        payload: { title, genre, country, releaseDate },
      });
      clearInputsAndErrors();
    }
  }

  return (
    <div>
      <h1>Creation Form</h1>
      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <select
          name="genre"
          value={genre}
          onChange={(event) => setGenre(event.target.value)}
        >
          <option value="" disabled>
            genre
          </option>
          <option value="horror">horror</option>
          <option value="comedy">comedy</option>
          <option value="documentary">documentary</option>
          <option value="anime">anime</option>
        </select>

        <input
          type="text"
          placeholder="country"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
        <input
          type="date"
          value={releaseDate}
          onChange={(event) => setReleaseDate(event.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
