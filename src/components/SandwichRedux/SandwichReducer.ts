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
    case "add/bread":
      return {
        ...state,
        value: `${state.value} ${action.payload}`,
      };
    case "add/avocado":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "add/meat":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "add/salad":
      return {
        ...state,
        value: state.value + action.payload,
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
