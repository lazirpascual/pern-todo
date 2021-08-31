import React, { useEffect } from "react";
import { getAllTodos, removeTodo } from "../services/todos";
import EditTodo from "./EditTodo";

const ListTodo = ({ todos, setTodos }) => {
  useEffect(() => {
    const getTodos = async () => {
      try {
        const initialTodos = await getAllTodos();
        setTodos(initialTodos);
      } catch (error) {
        console.log(error.message);
      }
    };

    getTodos();
  }, [setTodos]);

  const deleteToDo = async (todoId) => {
    try {
      await removeTodo(todoId);
      setTodos(todos.filter((todo) => todo.todo_id !== todoId));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} todos={todos} setTodos={setTodos} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteToDo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
