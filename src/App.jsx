import Header from "./components/Header";
import TodoList from "./components/TodoList";
export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fafafa]">
      <div
        className="absolute left-0 top-0 h-[320px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(110deg, rgba(192,75,239,0.78), rgba(75,145,255,0.72)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85')",
        }}
      />
      <div className="relative mx-auto w-[calc(100%-32px)] max-w-[530px] pt-[80px]">
        <Header />
        <TodoList />
      </div>
    </main>
  );
}
