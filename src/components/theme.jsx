import React, { useState, useEffect } from 'react';
import '../css/ThemePicker.css'

const ThemePicker = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage for saved preference
    const savedTheme = localStorage.getItem('theme');
    // Or use system preference
    if (!savedTheme) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
    }
    return savedTheme;
  });

  useEffect(() => {
    // Apply the theme to the document
    document.documentElement.setAttribute('data-theme', theme);
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      className='theme-picker fa-lg'
      onClick={toggleTheme}>
      {theme === 'light' ?
        <i className="fa-regular fa-sun"></i>:
        <i className="fa-regular fa-moon"></i>
      }
    </div>
  );
};

export default ThemePicker;