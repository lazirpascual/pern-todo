import axios from "axios";

//const baseUrl = "https://chatvault.herokuapp.com/api/posts";
const baseUrl = "/api/todos";

export const getAllTodos = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getProfilePosts = async (username) => {
  const response = await axios.get(`${baseUrl}/profile/${username}`);
  return response.data;
};

export const createTodo = async (newTodo) => {
  const response = await axios.post(baseUrl, newTodo);
  return response.data;
};

export const removePost = async (postId, userId) => {
  const response = await axios.delete(`${baseUrl}/${postId}/${userId}`);
  return response.data;
};

export const updatePostService = async (postId, updatedPost) => {
  const response = await axios.put(`${baseUrl}/${postId}`, updatedPost);
  return response.data;
};
