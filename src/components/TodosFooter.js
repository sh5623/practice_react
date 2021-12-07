import { useDispatch, useSelector } from "react-redux";
import {
  filter,
  clearCompleted,
  selectFilterType,
  selectTodoCount,
} from "../store/todosReducer";

function TodosFooter() {
  const dispatch = useDispatch();
  const filterType = useSelector(selectFilterType);
  const todoCount = useSelector(selectTodoCount);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{todoCount}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a
            className={filterType === "all" ? "selected" : ""}
            href="#/"
            onClick={() => dispatch(filter("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={filterType === "do" ? "selected" : ""}
            href="#/active"
            onClick={() => dispatch(filter("do"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={filterType === "done" ? "selected" : ""}
            href="#/completed"
            onClick={() => dispatch(filter("done"))}
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={() => dispatch(clearCompleted())}
      >
        Clear completed
      </button>
    </footer>
  );
}

export default TodosFooter;
