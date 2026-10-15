function Header({ darkMode, setDarkMode }) {
  return (
    <header className="mb-10 flex items-center justify-between text-white sm:mb-[55px]">
      <h1 className="text-3xl font-bold tracking-[10px] sm:text-[38px] sm:tracking-[13px]">
        TODO
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-3xl sm:text-[38px]"
        aria-label="Toggle dark mode" >
        {darkMode ? "☀" : "☾"}
      </button>
    </header>
  );
}
export default Header;