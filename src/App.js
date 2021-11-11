import { useState } from "react";
import TodoList from "./TodoList";
import Coins from "./Coins";

function App() {
  const [select, setSelect] = useState("");

  const changeSelect = (event) => {
    setSelect(event.target.value);
  };

  return (
    <div>
      <label htmlFor="selectComponents">Choose your component's</label>
      <select id="selectComponents" onChange={changeSelect}>
        <option value="">Select components</option>
        <option value="1">TodoList</option>
        <option value="2">Coins</option>
      </select>
      {select === "1" ? <TodoList /> : null}
      {select === "2" ? <Coins /> : null}
    </div>
  );
}

export default App;
