import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodos((currentArray) => [todo, ...todos]);
  };

  return (
    <div>
      <h1>My To Dos {todos.length > 0 ? `(${todos.length})` : ""}</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {todos
        .slice(0)
        .reverse()
        .map((item, index) => (
          <li key={index}>{item}</li>
        ))}
    </div>
  );
}

export default TodoList;
