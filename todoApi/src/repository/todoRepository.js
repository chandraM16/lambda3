const todoArray = [];

class TodoRepository {
  createTodo(todo) {
    todoArray.push(todo);
    return todo;
  }

  getTodos() {
    return todoArray;
  }

  getTodoById(id) {
    return todoArray.find((todo) => todo.id === id);
  }
  updateTodo(id, updatedTodo) {
    const index = todoArray.findIndex((item) => item.id === id);
    if (index !== -1) {
      todoArray[index] = { ...todoArray[index], ...updatedTodo };
      return todoArray[index];
    }
    return null; // or throw an error if todo not found
  }

  deleteTodo(id) {
    return todoArray.filter((todo) => todo.id !== id);
  }
}

module.exports = TodoRepository;
