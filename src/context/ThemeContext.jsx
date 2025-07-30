import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('blue');

  const themes = {
    blue: {
      primary: 'blue-600',
      primaryHover: 'blue-700',
      primaryLight: 'blue-100',
      primaryText: 'blue-600',
      accent: 'blue-400',
      border: 'blue-600',
      ring: 'blue-500'
    },
    green: {
      primary: 'green-600',
      primaryHover: 'green-700',
      primaryLight: 'green-100',
      primaryText: 'green-600',
      accent: 'green-400',
      border: 'green-600',
      ring: 'green-500'
    },
    purple: {
      primary: 'purple-600',
      primaryHover: 'purple-700',
      primaryLight: 'purple-100',
      primaryText: 'purple-600',
      accent: 'purple-400',
      border: 'purple-600',
      ring: 'purple-500'
    },
    red: {
      primary: 'red-600',
      primaryHover: 'red-700',
      primaryLight: 'red-100',
      primaryText: 'red-600',
      accent: 'red-400',
      border: 'red-600',
      ring: 'red-500'
    }
  };

  const changeTheme = (themeName) => {
    setCurrentTheme(themeName);
    localStorage.setItem('theme', themeName);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const getThemeClasses = () => themes[currentTheme];

  return (
    <ThemeContext.Provider value={{
      currentTheme,
      changeTheme,
      getThemeClasses,
      themes
    }}>
      {children}
    </ThemeContext.Provider>
  );
};