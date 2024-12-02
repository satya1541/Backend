const express = require("express");
const connection = require("db_config");

const app = express();
const PORT = 4008;

app.get("/", (req, res) => {
  connection.query("INSERT INTO users (name, password) VALUES (?, ?)", [
    req.body.name,
    req.body.password,
  ]);
});

app.listen(PORT, () => {
  console.log("Server Started at port : ", PORT);
});
