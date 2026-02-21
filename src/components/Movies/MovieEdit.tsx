import EditIcon from "@mui/icons-material/Edit";
import { useState, type FormEvent, type JSX } from "react";
import { useDispatch } from "react-redux";

interface Props {
  id: string;
}

export default function MovieEdit(props: Props): JSX.Element {
  const { id } = props;
  const [title, setTitle] = useState<string>("");
  const [toggle, SetToggle] = useState<boolean>(false);
  const dispatch = useDispatch();

  function handleEdit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    dispatch({ type: "movies/editTitle", payload: { id, newTitle: title } });
    SetToggle(!toggle);
    setTitle("");
  }

  return (
    <div>
      <EditIcon
        onClick={() => {
          SetToggle(!toggle);
        }}
      />
      {toggle && (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
}
