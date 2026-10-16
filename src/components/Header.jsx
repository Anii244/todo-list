import { Sun, Moon } from "lucide-react";
function Header({darkMode, onToggleDarkMode}) {
  return (
    <header className="mb-12 flex items-center justify-between">
      <h1 className="text-4xl font-bold tracking-[12px] text-white">
        TODO
      </h1>
      <button
        onClick={onToggleDarkMode}>  
        {darkMode ? <Moon size={20}/> : <Sun size={20}/>}
      </button> 
    </header>
  );
}
export default Header;