import Todo from "./Todo";
import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { selectItems, selectFilterType, checkAll } from "../store/todosReducer";

const filteredTodosSelector = createSelector(
  selectItems,
  selectFilterType,
  (items, filterType) => {
    switch (filterType) {
      case "do":
        return items.filter((todo) => !todo.done);
      case "done":
        return items.filter((todo) => todo.done);
      default:
        return items;
    }
  }
);

const isAllCheckedSelector = (state) =>
  state.todos.items.every((todo) => todo.done);

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector(filteredTodosSelector);
  const Todos = todos.map((todo) => <Todo key={todo.id} {...todo} />);
  const isAllChecked = useSelector(isAllCheckedSelector);

  return (
    <section className="main">
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={isAllChecked}
        onChange={(e) => dispatch(checkAll(e.target.checked))}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">{Todos}</ul>
    </section>
  );
}

export default Todos;
