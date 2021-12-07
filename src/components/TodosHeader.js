import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/todosReducer";

function TodosHeader() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    if (e.isComposing || e.keyCode === 229) {
      return;
    }

    if (!(e.keyCode === 13 || e.key === "Enter")) {
      return;
    }

    const text = input.trim();
    if (text === "") {
      return;
    }

    setTimeout(() => {
      setInput("");
      dispatch(add(text));
    }, 100);
  };

  return (
    <header className="header">
      <h1>Todos</h1>
      <input
        className="new-todo"
        value={input}
        onInput={(e) => setInput(e.target.value)}
        onKeyDown={handleAddTodo}
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
}

export default TodosHeader;
