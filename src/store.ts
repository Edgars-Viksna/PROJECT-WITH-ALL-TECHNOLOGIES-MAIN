import { combineReducers, createStore } from "redux";
import SandwichReducer from "./components/SandwichRedux/SandwichReducer";
import moviesReducer from "./components/Movies/moviesReducer";

const store = createStore(
  combineReducers({
    sandwich: SandwichReducer,
    movies: moviesReducer
  }),
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
 