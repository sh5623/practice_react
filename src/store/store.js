import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosReducer";
import studysReducer from "./studysReducer";

export default configureStore({
  reducer: {
    todos: todosReducer,
    studys: studysReducer,
  },
});
