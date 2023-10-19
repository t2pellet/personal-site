'use client';

import React, { useContext } from 'react';
import ThemeContext, { ThemeProvider } from '@/context/ThemeContext';
import { IconMoon, IconSun } from '@tabler/icons-react';
import classNames from 'classnames';

function RawThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme != 'light';

  const fullClasses = (className: string, dark: boolean) => {
    const shouldShow = isDark ? dark : !dark;
    return classNames(className, 'pointer-events-none absolute top-1', {
      ['hidden']: shouldShow,
    });
  };

  return (
    <div className='relative'>
      <input
        type='checkbox'
        className='toggle'
        onChange={toggleTheme}
        checked={theme != 'light'}
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
