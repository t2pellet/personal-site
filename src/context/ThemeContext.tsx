'use client';

import React, {
  PropsWithChildren,
  useCallback,
  useLayoutEffect,
  useMemo,
} from 'react';
import { Theme, ThemeColors, themes } from '@/types';
import useLocalStorage from 'use-local-storage';
import themeColors from 'daisyui/src/theming/themes';

export type ThemeContextType = {
  theme: Theme;
  colorScheme: 'light' | 'dark';
  toggleTheme: () => void;
};

const defaultValue: ThemeContextType = {
  theme: 'dracula',
  colorScheme: 'dark',
  toggleTheme: () => undefined,
};
const Theme = React.createContext<ThemeContextType>(defaultValue);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'dracula');
  const { 'color-scheme': colorScheme } = useMemo(
    () =>
      themeColors[
        `[data-theme=${theme}]` as keyof typeof themeColors
      ] as ThemeColors,
    [theme]
  );

  // Theme from localstorage
  useLayoutEffect(() => {
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
      if (colorScheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Update theme callback
  const toggleTheme = useCallback(() => {
    const themeIndex = themes.indexOf(theme);
    const nextThemeIndex = (themeIndex + 1) % themes.length;
    const nextTheme = themes[nextThemeIndex];
    setTheme(nextTheme);
  }, [setTheme, theme]);

  return (
    <Theme.Provider value={{ theme, colorScheme, toggleTheme }}>
      {children}
    </Theme.Provider>
  );
}

export default Theme;
