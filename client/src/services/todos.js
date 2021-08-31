import axios from "axios";

//const baseUrl = "https://chatvault.herokuapp.com/api/posts";
const baseUrl = "/api/todos";

export const getAllTodos = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const createTodo = async (newTodo) => {
  const response = await axios.post(baseUrl, newTodo);
  return response.data;
};

export const removeTodo = async (todoId) => {
  const response = await axios.delete(`${baseUrl}/${todoId}`);
  return response.data;
};

export const updateTodo = async (todoId, updatedTodo) => {
  const response = await axios.put(`${baseUrl}/${todoId}`, updatedTodo);
  return response.data;
};
