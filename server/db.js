const Pool = require("pg").Pool;

const pool = new Pool({
  user: "irucppualqneyx",
  password: "8f3a74c38d2eb93955e6b9aba0d8d2cc657af4382588d1e389cbb93444b10dbe",
  host: "ec2-44-196-170-156.compute-1.amazonaws.com",
  port: 5432,
  database: "dcupu92g2u8gf0",
});

module.exports = pool;
