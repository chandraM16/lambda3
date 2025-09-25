class TodoService {
  constructor(todoRepository) {
    this.todoRepository = todoRepository;
  }
  createTodo(todo) {
    // any business logic
    return this.todoRepository.createTodo(todo);
  }
  getTodos() {
    return this.todoRepository.getTodos();
  }
  getTodoById(id) {
    return this.todoRepository.getTodoById(id);
  }
  updateTodo(id, updatedTodo) {
    return this.todoRepository.updateTodo(id, updatedTodo);
  }
  deleteTodo(id) {
    return this.todoRepository.deleteTodo(id);
  }
}


module.exports = TodoService;
