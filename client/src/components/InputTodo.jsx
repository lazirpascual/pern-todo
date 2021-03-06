import React, { useState } from "react";
import { createTodo } from "../services/todos";

const InputTodo = ({ todos, setTodos }) => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const body = { description };
      const newTodo = await createTodo(body);
      setTodos([...todos, newTodo]);
      setDescription("");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
