
import TodoItem from "./TodoItem";

function TodoList({
  todos,
  toggleTask,
  deleteTask,
  darkMode,
}) {
  return (
    <div>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            darkMode={darkMode}
          />
        ))
      ) : (
        <p className="p-6 text-center text-sm text-gray-400">
          No tasks to show
        </p>
      )}
    </div>
  );
}

export default TodoList;
