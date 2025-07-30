import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const themes = {
  green: {
    primary: 'bg-green-600',
    primaryHover: 'bg-green-700',
    primaryDark: 'text-green-800',
    textPrimary: 'text-green-600',
    borderPrimary: 'border-green-600',
    bgPrimary: 'bg-green-600',
    bgPrimaryHover: 'hover:bg-green-700',
  },
  blue: {
    primary: 'bg-blue-600',
    primaryHover: 'bg-blue-700',
    primaryDark: 'text-blue-800',
    textPrimary: 'text-blue-600',
    borderPrimary: 'border-blue-600',
    bgPrimary: 'bg-blue-600',
    bgPrimaryHover: 'hover:bg-blue-700',
  },
  purple: {
    primary: 'bg-purple-600',
    primaryHover: 'bg-purple-700',
    primaryDark: 'text-purple-800',
    textPrimary: 'text-purple-600',
    borderPrimary: 'border-purple-600',
    bgPrimary: 'bg-purple-600',
    bgPrimaryHover: 'hover:bg-purple-700',
  },
  red: {
    primary: 'bg-red-600',
    primaryHover: 'bg-red-700',
    primaryDark: 'text-red-800',
    textPrimary: 'text-red-600',
    borderPrimary: 'border-red-600',
    bgPrimary: 'bg-red-600',
    bgPrimaryHover: 'hover:bg-red-700',
  },
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('green');

  const switchTheme = (themeName) => {
    setCurrentTheme(themeName);
  };

  const theme = themes[currentTheme];

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, switchTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};