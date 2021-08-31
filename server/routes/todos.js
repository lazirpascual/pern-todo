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

    res.json(newTodo.rows[0]);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = todosRouter;
