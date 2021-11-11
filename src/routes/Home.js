import { useState } from "react";
import TodoList from "../components/TodoList";
import Coins from "../components/Coins";
import { Redirect } from "react-router-dom";

function Home() {
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
        <option value="3">Movies</option>
      </select>
      {select === "1" ? <TodoList /> : null}
      {select === "2" ? <Coins /> : null}
      {select === "3" ? <Redirect to="/movie"></Redirect> : null}
    </div>
  );
}

export default Home;
