import { useState } from "react";
import TodoList from "../components/TodoList";
import Coins from "../components/Coins";
import { Redirect } from "react-router-dom";
import Todos from "../components/Todos";
import Header from "../components/TodosHeader";
import Footer from "../components/TodosFooter";
import Info from "../components/TodosInfo";
import Studys from "../components/Studys";
import "todomvc-app-css/index.css";

function Home() {
  const [select, setSelect] = useState("");

  const changeSelect = (event) => {
    setSelect(event.target.value);
  };

  const TodoComponents = () => {
    return (
      <>
        <section className="todoapp">
          <Header />
          <Todos />
          <Footer />
        </section>
        <Info />
      </>
    );
  };

  return (
    <div>
      <label htmlFor="selectComponents">Choose your component's</label>
      <select id="selectComponents" onChange={changeSelect}>
        <option value="">Select components</option>
        <option value="1">TodoList</option>
        <option value="2">Coins</option>
        <option value="3">Movies</option>
        <option value="4">New Todos</option>
        <option value="5">Studys</option>
      </select>
      {select === "1" ? <TodoList /> : null}
      {select === "2" ? <Coins /> : null}
      {select === "3" ? <Redirect to="/movie"></Redirect> : null}
      {select === "4" ? <TodoComponents /> : null}
      {select === "5" ? <Studys /> : null}
    </div>
  );
}

export default Home;
