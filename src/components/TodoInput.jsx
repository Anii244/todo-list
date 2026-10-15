function TodoInput({ task, setTask, addTask, darkMode }) {
  return (
    <form
      onSubmit={addTask}
      className={`mb-7 flex h-[65px] items-center gap-4 rounded-md px-5 shadow-md sm:mb-[50px] ${
        darkMode ? "bg-[#252637]" : "bg-white"
      }`}
    >
      <span className="h-6 w-6 shrink-0 rounded-full border border-gray-200"></span>

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
        className="text-2xl text-indigo-500 sm:hidden"
        aria-label="Add task"
      >
        +
      </button>
    </form>
  );
}

export default TodoInput;
