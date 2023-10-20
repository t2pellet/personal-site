'use client';

import React, { useContext } from 'react';
import ThemeContext, { ThemeProvider } from '@/context/ThemeContext';
import { IconMoon, IconSun } from '@tabler/icons-react';
import classNames from 'classnames';

function RawThemeToggle() {
  const { colorScheme, toggleTheme } = useContext(ThemeContext);
  const isDark = colorScheme != 'light';

  const fullClasses = (className: string, dark: boolean) => {
    return classNames(className, 'pointer-events-none absolute top-1', {
      ['hidden']: dark ? isDark : !isDark,
    });
  };

  return (
    <div className='relative flex h-fit'>
      <input
        type='checkbox'
        className='toggle'
        onChange={toggleTheme}
        checked={colorScheme != 'light'}
      />
      <IconSun size={16} className={fullClasses('left-1.5', false)} />
      <IconMoon size={16} className={fullClasses('right-1.5', true)} />
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
