const Pool = require("pg").Pool;

const pool = new Pool({
  user: "lazir",
  password: "todoauth",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});

module.exports = pool;
