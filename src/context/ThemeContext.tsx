'use client'

import React, { PropsWithChildren, useCallback, useLayoutEffect } from 'react';
import { Theme, themes } from '@/types';
import useLocalStorage from 'use-local-storage';

export type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
}


const defaultValue: ThemeContextType = {
  theme: 'dracula',
  toggleTheme: () => undefined,
}
const Theme = React.createContext<ThemeContextType>(defaultValue)

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", defaultValue.theme);

  // Theme from localstorage
  useLayoutEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme)
    }
  }, [theme]);

  // Update theme callback
  const toggleTheme = useCallback(() => {
    const themeIndex = themes.indexOf(theme);
    const nextThemeIndex = (themeIndex + 1) % (themes.length);
    const nextTheme = themes[nextThemeIndex];
    setTheme(nextTheme);
  }, [setTheme, theme])

  return (
    <Theme.Provider value={{ theme, toggleTheme }}>
      {children}
    </Theme.Provider>
  )
}


export default Theme;