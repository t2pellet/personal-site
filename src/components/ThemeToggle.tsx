'use client';

import React, { useContext } from 'react';
import ThemeContext, { ThemeProvider } from '@/context/ThemeContext';

function RawThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <input
      type='checkbox'
      className='toggle'
      onChange={toggleTheme}
      checked={theme != 'light'}
    />
  );
}

export default function ThemeToggle() {
  return (
    <ThemeProvider>
      <RawThemeToggle />
    </ThemeProvider>
  );
}
