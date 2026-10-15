function TodoFooter({
  remaining,
  filter,
  setFilter,
  clearCompleted,
  darkMode,
}) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-3 gap-y-4 px-4 py-5 text-xs sm:px-6">
      <span className="whitespace-nowrap text-gray-400">
        {remaining} {remaining === 1 ? "item" : "items"} left
      </span>

      <div className="flex w-full items-center justify-center gap-6 sm:w-auto sm:gap-4">
        {["All", "Active", "Completed"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`font-semibold ${
              filter === item
                ? "text-indigo-500"
                : darkMode
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        onClick={clearCompleted}
        className={`whitespace-nowrap ${
          darkMode ? "text-gray-300" : "text-gray-600"
        }`}
      >
        Clear Completed
      </button>
    </footer>
  );
}

export default TodoFooter;
