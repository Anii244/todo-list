import { useState } from "react";

import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

function App() {
  // All tasks
  const [todos, setTodos] = useState([
    { id: 1, text: "Take a bath", completed: true },
    { id: 2, text: "Cook rice", completed: false },
  ]);

  // Input text
  const [task, setTask] = useState("");

  // Selected filter
  const [filter, setFilter] = useState("All");

  // Dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Add task
  function addTask(e) {
    e.preventDefault();

    if (task.trim() === "") return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: task.trim(),
        completed: false,
      },
    ]);

    setTask("");
  }

  // Complete or uncomplete a task
  function toggleTask(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  // Delete task
  function deleteTask(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Remove completed tasks
  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

  // Filter tasks
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  // Count active tasks
  const remaining = todos.filter(
    (todo) => !todo.completed
  ).length;

  return (
    <div
      className={`relative isolate min-h-screen transition-colors ${
        darkMode
          ? "bg-[#171823] text-white"
          : "bg-[#fafafa] text-[#484b5a]"
      }`}
    >
      {/* Background image */}
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[320px] bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(110deg, rgba(190,66,236,0.75), rgba(65,143,250,0.65)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      <main className="mx-auto w-[calc(100%-36px)] max-w-[530px] pt-12 pb-10 sm:pt-[78px]">
        {/* Header component */}
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Input component */}
        <TodoInput
          task={task}
          setTask={setTask}
          addTask={addTask}
          darkMode={darkMode}
        />

        {/* Todo card */}
        <section
          className={`overflow-hidden rounded-lg shadow-md ${
            darkMode ? "bg-[#252637]" : "bg-white"
          }`}
        >
          {/* List component */}
          <TodoList
            todos={filteredTodos}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            darkMode={darkMode}
          />

          {/* Footer component */}
          <TodoFooter
            remaining={remaining}
            filter={filter}
            setFilter={setFilter}
            clearCompleted={clearCompleted}
            darkMode={darkMode}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
