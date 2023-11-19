'use client';

import React, { useContext } from 'react';
import ThemeContext, { ThemeProvider } from '@/context/ThemeContext';
import { TbMoon as IconMoon, TbSun as IconSun } from 'react-icons/tb';
import classNames from 'classnames';

function RawThemeToggle() {
  const { colorScheme, toggleTheme, loaded } = useContext(ThemeContext);

  const fullClasses = (className: string, on: boolean) => {
    return classNames(className, 'pointer-events-none absolute top-1', {
      ['hidden']: on
        ? !loaded || colorScheme !== 'light'
        : loaded && colorScheme === 'light',
    });
  };

  return (
    <div className='relative flex h-fit'>
      <input
        type='checkbox'
        className='toggle'
        onChange={toggleTheme}
        checked={!loaded || colorScheme != 'light'}
      />
      <IconSun
        size={16}
        className={classNames(fullClasses('left-1.5', false))}
      />
      <IconMoon
        size={16}
        className={classNames(fullClasses('right-1.5', true))}
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
