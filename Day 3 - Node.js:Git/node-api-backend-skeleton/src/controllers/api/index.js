const todos = [
  {
    id: 1,
    text: 'Buy milk'
  },
  {
    id: 2,
    text: 'Buy oranges'
  },
  {
    id: 3,
    text: 'Pay bills'
  },
  {
    id: 4,
    text: 'Go car shopping'
  },
];

function readTodos() {
  return todos;
}

module.exports = Object.freeze({readTodos});
