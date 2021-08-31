const express = require("express");
const http = require("http");
const config = require("./utils/config");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const todosRouter = require("./routes/todos");
const middleware = require("./utils/middleware");

// MIDDLEWARE
app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(helmet());

// ROUTES
app.use("/api/todos", todosRouter);

app.use(middleware.unknownEndpoint);

const server = http.createServer(app);

server.listen(config.PORT, () => {
  console.log("Server has started on port 3001");
});
