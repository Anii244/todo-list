import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <main
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#fafafa] text-gray-800"
      }`}
    >
      <div
        className="absolute left-0 top-0 h-[320px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(110deg, rgba(192,75,239,0.78), rgba(75,145,255,0.72)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85')",
        }}
      />
      <div className="relative mx-auto w-[calc(100%-32px)] max-w-[530px] pt-[80px]">
        <Header
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
        />
        <TodoList
          darkMode={darkMode}
        />
      </div>
    </main>
  );
}
export default App;
