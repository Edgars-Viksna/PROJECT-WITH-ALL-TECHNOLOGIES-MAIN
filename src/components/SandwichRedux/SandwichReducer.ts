import type { Action } from "./types/Action";
import type SandwichState from "./types/SandwichState";

const initialState: SandwichState = {
  value: "",
};

export default function SandwichReducer(
  state: SandwichState = initialState,
  action: Action,
): SandwichState {
  switch (action.type) {
    case "add/ingridient":
      return {
        ...state,
        value: `${state.value} ${action.payload}`,
      };

    case "eatsandwich":
      return {
        ...state,
        value: "",
      };

    default:
      return state;
  }
}
