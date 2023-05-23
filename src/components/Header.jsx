import { useEffect, useState } from "react";
import MoonIcon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const initial = localStorage.getItem("theme") === "dark";

const Header = () => {
  const [darkMode, setDarkMode] = useState(initial);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      //setDarkMode(false)
    }
  }, [darkMode]);

  return (
    <header className="container mx-auto px-8 pt-8 md:max-w-lg md:pt-16">
      <div className="flex justify-between">
        <h1 className="text-3xl md:text-5xl font-semibold uppercase tracking-[.5em] text-white ">
          todo
        </h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <IconSun /> : <MoonIcon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
