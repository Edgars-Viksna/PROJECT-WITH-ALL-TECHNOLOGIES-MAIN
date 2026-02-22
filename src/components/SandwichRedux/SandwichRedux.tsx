import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function SandwichRedux(): JSX.Element {
  const dispatch = useDispatch();

  const sandwich = useSelector((state: RootState) => state.sandwich.value);

  function handleBread(): void {
    dispatch({ type: "add/ingridient", payload: " 🍞" });
  }

  function handleAvocado(): void {
    dispatch({ type: "add/ingridient", payload: " 🥑" });
  }

  function handleMeat(): void {
    dispatch({ type: "add/ingridient", payload: " 🥩" });
  }

  function handleSalad(): void {
    dispatch({ type: "add/ingridient", payload: " 🥬" });
  }

  function handleEatSandwich(): void {
    dispatch({ type: "eatsandwich" });
  }

  return (
    <div>
      <h1>Sandwich maker 🥪</h1>

      <div>
        <button type="button" onClick={handleBread}>
          {" "}
          add 🍞{" "}
        </button>
        <button type="button" onClick={handleAvocado}>
          {" "}
          add 🥑{" "}
        </button>
        <button type="button" onClick={handleMeat}>
          {" "}
          add 🥩{" "}
        </button>
        <button type="button" onClick={handleSalad}>
          {" "}
          add 🥬{" "}
        </button>
        <button type="button" onClick={handleEatSandwich}>
          {" "}
          Eat Sandwich 🍽️{" "}
        </button>

        <div
          style={{
            backgroundColor: "#262627",
            border: "2px solid #0066cc",
            padding: "2rem",
            borderRadius: "12px",
            fontSize: "1.9rem",
            color: "#e3e69b",
          }}
        >
          My Sandwich: {sandwich}
        </div>
      </div>
    </div>
  );
}
