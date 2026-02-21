import type { Action } from "./types/Action";
import type Movie from "./types/Movie";
import { uid } from "uid";

const initialState: Movie[] = [
  {
    id: uid(),
    title: "Minions",
    genre: "Comedy",
    country: "USA",
    releaseDate: "2000-01-01",
  },
];

export default function moviesReducer(
  state: Movie[] = initialState,
  action: Action,
): Movie[] {
  switch (action.type) {
    case "movies/add":
      return [...state, { ...action.payload, id: uid() }];

    // Возвращается новый массив состояния (state) с добавленным в конец новым объектом фильма.
    // Объект фильма берется из action payload ( в payload содержится информация
    // о новом фильме), а также добавляется новое поле id, которое генерируется функцией uid()

    case "movies/delete":
      return state.filter((movie) => movie.id !== action.payload);

    // Возвращается новый массив состояния (state), в котором удалены все элементы,
    // у которых id не соответствует id, указанному в action. payload ( payload содержит id удаляемого фильма).
    // Что означает условие?
    // movie. id !== action. payload

    case "movies/editTitle":
      return state.map((movie) =>
        movie.id === action.payload.id
          ? { ...movie, title: action.payload.newTitle }
          : movie,
      );

    // Если id фильма совпадает с id, указанным в action. payload,
    // то возвращается новый объект фильма с измененным заголовком (title).
    // В противном случае возвращается исходный объект фильма без изменений.
    default:
      return state;
  }
}

// Мы говорим:
// Оставь все фильмы, у которых id НЕ равен переданному id.
// То есть:
// Если id совпадает → элемент НЕ попадёт в новый массив
// Если id НЕ совпадает → элемент останется
// Почему это правильно в Redux?
// B Redux нельзя мутировать состояние напрямую
// X Нельзя:
// state.splice(...)

// 图 Нужно возвращать новый массив
// filter() идеально подходит, потому что:
// не изменяет исходный массив
// создаёт новый
// соответствует принципу иммутабельности

//Пример для студентов
// Исходное состояние:
// state = [
// { id: 1, title: "Matrix" },
// { id: 2, title: "Avatar" },
// { id: 3, title: "Titanic" }
// ]
// Action:
// action = {
// type: 'movies/delete',
// payload: 2
// }

// Результат:
// [
// { id: 1, title: "Matrix"},
// {id: 3, title: "Titanic" }
// ]

// Фильм с id: 2 удалён.
