const todosRouter = require("express").Router();
const pool = require("../db");

// create a todo
todosRouter.post("/", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );

    res.status(200).json(newTodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// get all todos
todosRouter.get("/", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// get a specific todo
todosRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.status(200).json(todo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

// update a todo
todosRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [
      description,
      id,
    ]);

    res.status(200).json("Todo was updated!");
  } catch (error) {
    console.log(error.message);
  }
});

// delete a todo
todosRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.status(200).json("Todo was deleted!");
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = todosRouter;
