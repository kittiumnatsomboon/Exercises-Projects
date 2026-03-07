// src/components/ThemeSwitch.tsx
import React from 'react';
import { useTheme } from './Themecontext';

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      
      className="loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
    >
      {isDark}
    </button>
    
  );
};

export default ThemeSwitch;
