import { useState, useEffect } from "react";
import { Moon, Sun } from 'lucide-react';
import { Link } from 'react-scroll';


const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative">
    <nav className="bg-gray-800 dark:bg-gray-900 p-4 text-white dark:text-gray-200 flex justify-between items-center fixed w-full z-10 shadow-lg">
      {/* Logo */}
      <div className="text-lg font-bold">
        <Link to="accueil" smooth={true} duration={500} className="hover:text-primary ml-14 text-2xl">MyDevPortfolio</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-4 ml-auto">
        <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:border-b-solid hover:border-b-2 hover:border-b-[#00bcd4]">À propos</Link></li>
        <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:border-b-solid hover:border-b-2 hover:border-b-[#00bcd4]">Projets</Link></li>
        <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:border-b-solid hover:border-b-2 hover:border-b-[#00bcd4]">Contact</Link></li>
      </ul>

      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 bg-gray-700 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-600 dark:hover:bg-gray-700 transition ml-8 mr-8"
      >
        {theme === "light" ? (<Moon className="w-5 h-5" />) : (<Sun className="w-5 h-5" />)}
      </button>
    </nav>
    </div>
  );
};

export default Header;