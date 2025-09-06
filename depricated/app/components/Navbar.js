'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Sun,
  Moon,
  Menu,
  X,
  Home,
  MessageSquare,
  LineChart,
  User2,
  FolderGit,
  Phone
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    const darkModeOn = !isDarkMode;
    setIsDarkMode(darkModeOn);
    document.body.classList.toggle('dark-mode', darkModeOn);
    localStorage.setItem('theme', darkModeOn ? 'dark' : 'light');
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setIsDarkMode(isDark);
    if (isDark) document.body.classList.add('dark-mode');
  }, []);

  return (
    <nav className="Navbar bg-gray-300 p-4 h-auto relative z-10 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        {/* Logo */}
        <h1 className="text-[30px] font-bold">Butt Networks</h1>

        {/* Desktop links - visible only after 1021px */}
        <ul className="hidden min-[1021px]:flex space-x-8 items-center">
          <li>
            <Link
              href="#home"
              className="flex items-center gap-2 hover:text-yellow-300 hover:bg-gray-500 dark:hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              <Home size={18} /> Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="flex items-center gap-2 hover:text-yellow-300 hover:bg-gray-500 dark:hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              <MessageSquare size={18} /> About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="flex items-center gap-2 hover:text-yellow-300 hover:bg-gray-500 dark:hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              <FolderGit size={18} /> Projects
            </Link>
          </li>
          <li>
            <Link
              href="#ceo"
              className="flex items-center gap-2 hover:text-yellow-300 hover:bg-gray-500 dark:hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              <User2 size={18} /> Our CEO
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="flex items-center gap-2 hover:text-yellow-300 hover:bg-gray-500 dark:hover:bg-gray-700 px-4 py-2 rounded font-semibold"
            >
              <Phone size={18} /> Contact
            </Link>
          </li>
          <li>
            <button onClick={handleDarkMode} className="text-2xl mt-[8px]">
              {isDarkMode ? <Moon size={22} /> : <Sun size={22} />}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger - visible only up to 1020px */}
        <button
          className="min-[1021px]:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown - visible only on small screens */}
      {isOpen && (
        <ul className="min-[1021px]:hidden mt-4 space-y-4 w-[160px] mx-auto text-center rounded-lg py-4 shadow-lg">
          <li>
            <Link
              href="#home"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              <Home size={18} /> Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              <MessageSquare size={18} /> About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              <LineChart size={18} /> Projects
            </Link>
          </li>
          <li>
            <Link
              href="#ceo"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              <User2 size={18} /> Our CEO
            </Link>
          </li>
          <li>
              <Link
              href="#contact"
              className="flex items-center justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              <Phone size={18} /> Contact
            </Link>
          </li>
          <li>
            <button
              onClick={handleDarkMode}
              className="flex items-center ml-5 justify-center gap-2 px-3 py-2 rounded active:bg-gray-400 dark:active:bg-gray-700"
            >
              {isDarkMode ? <Moon size={18} /> : <Sun size={18} />} Theme
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
