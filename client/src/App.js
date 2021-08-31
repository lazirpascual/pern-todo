import "./App.css";
import { useState } from "react";
import InputTodo from "./components/InputTodo";
import ListTodo from "./components/ListTodo";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <div className="container">
        <InputTodo todos={todos} setTodos={setTodos} />
        <ListTodo todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default App;
