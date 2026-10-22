import { useState, useEffect } from "react";
function TodoList({darkMode}) {
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("All");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [
      { id: 1, text: "Take a bath", completed: true },
      { id: 2, text: "Cook rice", completed: false },
    ],
  );
  function saveTodos(updatedTodos) {
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  }
  // useEffect(() => {
  //    localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  function addTask(e) {
    e.preventDefault();
    if (!task.trim()) return;
    const updatedTodos = [
      ...todos,
      {
        id: Date.now(),
        text: task.trim(),
        completed: false,
      },
    ];
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
    setTask("");
  }
  function toggleTask(id) {
    const updatedTodos = todos.map((todo) =>
       todo.id === id
         ? { ...todo, completed: !todo.completed }
         : todo
    );

    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  }
  function deleteTask(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  }
  function clearCompleted() {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  }
  return (
    <section className="w-full">
      <form
        onSubmit={addTask}
        className={`mb-12 flex h-[69px] items-center gap-4 rounded-md px-6 shadow-sm ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <span className="h-6 w-6 shrink-0 rounded-full border border-gray-200" />
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What to do ?"
          className={`min-w-0 flex-1 bg-transparent text-base outline-none ${
             darkMode
             ? "text-white placeholder:text-gray-400"
                 : "text-gray-700 placeholder:text-gray-400"
          }`}
        />
        <button
          type="submit"
          className="rounded-md bg-violet-500 px-3 py-2 text-sm text-white hover:bg-violet-600"
        >
          Add
        </button>
      </form>
      <div
       className={`overflow-hidden rounded-lg bg-white shadow-md ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
      >
        <ul>
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className={`flex min-h-[68px] items-center gap-4 border-b px-6 py-4 ${
                darkMode ? "border-gray-700" : "border-gray-100"
              }`}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTask(todo.id)}
                className="h-6 w-6 shrink-0 cursor-pointer appearance-none rounded-full border border-gray-200 checked:border-violet-400 checked:bg-violet-400 checked:after:block checked:after:text-center checked:after:text-sm checked:after:leading-[22px] checked:after:text-white checked:after:content-['✓']"
              />
              <span
                className={`min-w-0 flex-1 break-words text-base ${
                  todo.completed
                    ? "text-gray-400 line-through"
                    : darkMode
                      ? "text-gray-100"
                      : "text-gray-700"
                }`}
              >
                {todo.text}
              </span>
              <button
                type="button"
                onClick={() => deleteTask(todo.id)}
                aria-label={`Delete ${todo.text}`}
                className="shrink-0 bg-transparent px-1 text-3xl leading-none text-gray-400 hover:text-red-500"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
        <footer className="flex flex-wrap items-center justify-between gap-x-3 gap-y-4 px-6 py-5 text-xs font-semibold text-gray-500">
          <span>
            {todos.filter((todo) => !todo.completed).length} items left
          </span>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setFilter("All")}
              className="text-blue-500"
            >
              All
            </button>
            <button
              type="button"
              onClick={() => setFilter("Active")}
              className="hover:text-gray-800"
            >
              Active
            </button>
            <button
              type="button"
              onClick={() => setFilter("Completed")}
              className="hover:text-gray-800"
            >
              Completed
            </button>
          </div>
          <button
            type="button"
            onClick={clearCompleted}
            className="hover:text-gray-800"
          >
            Clear Completed
          </button>
        </footer>
      </div>
    </section>
  );
}
export default TodoList;
