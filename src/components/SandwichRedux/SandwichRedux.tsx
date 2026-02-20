import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";

export default function SandwichRedux(): JSX.Element {
  const dispatch = useDispatch();

  const sandwich = useSelector((state: RootState) => state.sandwich.value);

  function handleBread(): void {
    dispatch({ type: "add/ingridient", payload: "Bread 🍞" });
  }
 
  function handleAvocado(): void {
    dispatch({ type: "add/ingridient", payload: "Avocado 🥑" });
  }

  function handleMeat(): void {
    dispatch({ type: "add/ingridient", payload: "Meat 🥩" });
  }

  function handleSalad(): void {
    dispatch({ type: "add/ingridient", payload: "Salad 🥬" });
  }

  function handleEatSandwich(): void {
    dispatch({ type: "eatsandwich" });
  }

  return (
    
    <div>
        <h1>Sandwich maker 🥪</h1>
      <button type="button" onClick={handleBread}>
        {" "}
        add Bread{" "}
      </button>
      <button type="button" onClick={handleAvocado}>
        {" "}
        add Avocado{" "}
      </button>
      <button type="button" onClick={handleMeat}>
        {" "}
        add Meat{" "}
      </button>
      <button type="button" onClick={handleSalad}>
        {" "}
        add Salad{" "}
      </button>
      <button type="button" onClick={handleEatSandwich}>
        {" "}
        Eat Sandwich{" "}
      </button>

      <div style={{
  backgroundColor: '#262627',
  border: '2px solid #0066cc',
  padding: '2rem',
  borderRadius: '12px',
  fontSize: '1.9rem',
  color: '#e3e69b'}}>My Sandwich:   {sandwich}</div>
    </div>
  );
}
