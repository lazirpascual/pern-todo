import React, { useState } from "react";
import { updateTodo } from "../services/todos";

const EditTodo = ({ todo, todos, setTodos }) => {
  const [description, setDescription] = useState(todo.description);

  const updateDescription = async (e) => {
    try {
      e.preventDefault();
      const body = { description: description };
      const updatedTodo = await updateTodo(todo.todo_id, body);
      setTodos(
        todos.map((td) => (td.todo_id !== todo.todo_id ? td : updatedTodo))
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>
      <div class="modal" id={`id${todo.todo_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={(e) => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTodo;
