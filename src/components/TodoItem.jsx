
function TodoItem({ todo, toggleTask, deleteTask, darkMode }) {
  return (
    <div
      className={`flex min-h-[68px] items-center gap-4 border-b px-5 py-4 sm:gap-6 ${
        darkMode ? "border-gray-700" : "border-gray-100"
      }`}
    >
      <button
        onClick={() => toggleTask(todo.id)}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-sm text-white ${
          todo.completed
            ? "border-0 bg-gradient-to-br from-purple-500 to-blue-400"
            : "border-gray-200"
        }`}
        aria-label="Toggle task completion"
      >
        {todo.completed ? "✓" : ""}
      </button>

      <span
        className={`min-w-0 flex-1 break-words text-sm sm:text-base ${
          todo.completed ? "text-gray-400 line-through" : ""
        }`}
      >
        {todo.text}
      </span>

      <button
        onClick={() => deleteTask(todo.id)}
        className="text-3xl leading-none text-gray-400 hover:text-red-500"
        aria-label={`Delete ${todo.text}`}
      >
        ×
      </button>
    </div>
  );
}

export default TodoItem;
