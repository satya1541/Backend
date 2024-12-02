const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "",
  database: "node_mysql",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("success");
});

module.exports = connection;
