// Przygotowano liste zadan to do ze statusem; rozszerzenie wlasne to priorytet zadania, a najwieksza trudnosc sprawilo zachowanie niemutowalnego podejscia przy kilku operacjach.
const todos = [
  { id: 1, title: "Oddac projekt", done: false, priority: "wysoki" },
  { id: 2, title: "Przeczytac rozdzial", done: true, priority: "sredni" },
  { id: 3, title: "Przygotowac prezentacje", done: false, priority: "wysoki" },
];

function addTodo(todoList, title, priority = "sredni") {
  const nextId = Math.max(...todoList.map((todo) => todo.id)) + 1;

  return [...todoList, { id: nextId, title, done: false, priority }];
}

function markTodoAsDone(todoList, selectedId) {
  return todoList.map((todo) => (todo.id === selectedId ? { ...todo, done: true } : todo));
}

function getUndoneTodos(todoList) {
  return todoList.filter((todo) => !todo.done);
}

function formatTodos(todoList) {
  return todoList.map((todo) => `${todo.id}. ${todo.title} (${todo.priority})`);
}

const todosWithNewItem = addTodo(todos, "Powtorzyc material z JavaScript", "niski");
const updatedTodos = markTodoAsDone(todosWithNewItem, 1);
const undoneTodos = getUndoneTodos(updatedTodos);

console.log("Oryginalna lista zadan:");
console.log(formatTodos(todos));
console.log("Lista po dodaniu zadania:");
console.log(formatTodos(todosWithNewItem));
console.log("Lista po oznaczeniu zadania jako wykonane:");
console.log(updatedTodos);
console.log("Niewykonane zadania:");
console.log(formatTodos(undoneTodos));
