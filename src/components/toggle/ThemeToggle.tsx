'use client';

import React, { useContext } from 'react';
import ThemeContext, { ThemeProvider } from '@/context/ThemeContext';
import { TbMoon as IconMoon, TbSun as IconSun } from 'react-icons/tb';

function RawThemeToggle() {
  const { colorScheme, toggleTheme, loaded } = useContext(ThemeContext);

  if (!loaded) return null;
  return (
    <div className='relative flex h-fit'>
      <input
        type='checkbox'
        className='toggle'
        onChange={toggleTheme}
        checked={colorScheme != 'light'}
      />
      <IconSun
        size={16}
        className='pointer-events-none absolute left-1.5 top-1 hidden dark:flex'
      />
      <IconMoon
        size={16}
        className='pointer-events-none absolute right-1.5 top-1 dark:hidden'
      />
    </div>
  );
}

export default function ThemeToggle() {
  return (
    <ThemeProvider>
      <RawThemeToggle />
    </ThemeProvider>
  );
}
