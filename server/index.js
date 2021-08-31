const express = require("express");
const http = require("http");
const app = express();
const cors = require("cors");
const todosRouter = require("./routes/todos");

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/todos", todosRouter);

const server = http.createServer(app);

server.listen(3001, () => {
  console.log("Server has started on port 3001");
});
