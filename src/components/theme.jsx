import { useState, useEffect } from 'react';
import '../css/ThemePicker.css';

const themes = [
  { name: 'green-white', primary: '#4CAF50', secondary: '#FFFFFF' },
  { name: 'grey-white', primary: '#9E9E9E', secondary: '#FFFFFF' },
  { name: 'indigo-white', primary: '#3F51B5', secondary: '#FFFFFF' },
  { name: 'red-white', primary: '#F44336', secondary: '#FFFFFF' },
  { name: 'white-blue', primary: '#FFFFFF', secondary: '#2196F3' },
  { name: 'white-grey', primary: '#FFFFFF', secondary: '#9E9E9E' },
  { name: 'white-indigo', primary: '#FFFFFF', secondary: '#3F51B5' },
  { name: 'white-red', primary: '#FFFFFF', secondary: '#F44336' },
  { name: 'yellow-black', primary: '#FFEB3B', secondary: '#000000' },
];

const ThemePicker = () => {
  const [currentTheme, setCurrentTheme] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Initialize theme from localStorage or use first theme as default
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || themes[6].name;
    applyTheme(initialTheme);
    setCurrentTheme(initialTheme);
  }, []);

  const applyTheme = (themeName) => {
    // Remove all existing theme classes
    document.body.classList.remove(...themes.map(t => t.name));
    // Add the new theme class
    document.body.classList.add(themeName);
    localStorage.setItem('theme', themeName);
  };

  const selectTheme = (themeName) => {
    applyTheme(themeName);
    setCurrentTheme(themeName);
    setIsOpen(false);
  };

  return (
    <div className="theme-picker">
      <button
        className="theme-picker__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change theme"
        style={{
          background: `linear-gradient(135deg, ${themes.find(t => t.name === currentTheme)?.primary || '#fff'
            } 50%, ${themes.find(t => t.name === currentTheme)?.secondary || '#000'
            } 50%)`
        }}
      />

      {isOpen && (
        <div className="theme-picker__dropdown">
          {themes.map((theme) => (
            <button
              key={theme.name}
              className={`theme-picker__option ${currentTheme === theme.name ? 'theme-picker__option--active' : ''
                }`}
              onClick={() => selectTheme(theme.name)}
              style={{
                background: `linear-gradient(135deg, ${theme.primary} 50%, ${theme.secondary} 50%)`
              }}
              aria-label={`Select ${theme.name} theme`}
            >
              {currentTheme === theme.name && (
                <span className="theme-picker__checkmark">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemePicker;