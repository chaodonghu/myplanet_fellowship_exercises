const todos = [];

let id = 0;

function createTodo(text) {
  todos.push({
    // Preincrement
    id: ++id,
    text
  });
}

function readTodos() {
  return todos;
}

module.exports = Object.freeze({
  createTodo,
  readTodos
});
