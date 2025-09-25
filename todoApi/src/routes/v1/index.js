const express = require("express");
const {
  createTodoController,
  getTodosController,
  getTodoByIdController,
  updateTodoController,
  deleteTodoController,
} = require("../../controllers/todoController");
const { createTodoValidator, updateTodoValidator } = require("../../validators/todoValidator");

const v1Router = express.Router();

v1Router.post("/todo", createTodoValidator, createTodoController);
v1Router.get("/todos", getTodosController);
v1Router.get("/todo/:id", getTodoByIdController);
v1Router.put("/todo/:id", updateTodoValidator, updateTodoController);
v1Router.delete("/todo/:id", deleteTodoController);

module.exports = v1Router;
