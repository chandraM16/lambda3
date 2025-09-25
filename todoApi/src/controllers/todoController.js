const TodoService = require("../services/todoService");
const TodoRepository = require("../repository/todoRepository");
const { v4: uuidv4 } = require("uuid");
const todoRepository = new TodoRepository();
const todoService = new TodoService(todoRepository);

const createTodoController = (req, res) => {
  let { title, description, deadline } = req.body;

  // format the date 
  deadline = new Date(deadline).toISOString();
  title = title.trim();
  description = description.trim();
  deadline = deadline.trim();
  const id = uuidv4();
  const todo = todoService.createTodo({ id, title, description, deadline });
  return res.json(todo);
};

const getTodosController = (req, res) => {
  const todos = todoService.getTodos();
  return res.json(todos);
};

const getTodoByIdController = (req, res) => {
  const { id } = req.params;
  const todo = todoService.getTodoById(id.trim());
  return res.json(todo);
};

const updateTodoController = (req, res) => {
  const { id } = req.params;
  let { title, description, deadline } = req.body;
  title = title.trim();
  description = description.trim();
  deadline = deadline.trim();
  deadline = new Date(deadline).toISOString();
  const todo = todoService.updateTodo(id.trim(), { title, description, deadline });
  return res.json(todo);
};

const deleteTodoController = (req, res) => {
  const { id } = req.params;
  const todo = todoService.deleteTodo(id.trim());
  return res.json(todo);
};

module.exports = {
  createTodoController,
  getTodosController,
  getTodoByIdController,
  updateTodoController,
  deleteTodoController,
};
