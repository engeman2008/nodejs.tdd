const express = require("express");
const todoRoutes = require("./routes/todo.routes");
const app = express();
const mongodb = require("./mongodb/mongodv.connect");

mongodb.connect().then(() => console.log("connected"));

app.use(express.json());

app.use("/todos", todoRoutes);

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});
app.get("/", (req, res) => {
  res.send("hello owrld");
});

module.exports = app;
