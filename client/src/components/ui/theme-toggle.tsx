import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark" || 
        (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    if (isDarkMode) {
      // Switch to light mode
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      // Switch to dark mode
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button 
      onClick={toggleTheme}
      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 focus:outline-none"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <motion.i 
          initial={{ scale: 0.5, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          className="ri-sun-line text-xl text-yellow-500"
        />
      ) : (
        <motion.i 
          initial={{ scale: 0.5, rotate: 30 }}
          animate={{ scale: 1, rotate: 0 }}
          className="ri-moon-clear-line text-xl text-blue-700"
        />
      )}
    </button>
  );
};

export default ThemeToggle;