import { combineReducers, createStore } from "redux";
import SandwichReducer from "./components/SandwichRedux/SandwichReducer";

const store = createStore(
  combineReducers({
    sandwich: SandwichReducer,
  }),
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
