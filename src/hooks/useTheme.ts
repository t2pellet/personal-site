import useLocalStorage from 'use-local-storage';
import themeColors from 'daisyui/src/theming/themes';

export type Theme = {
  'color-scheme': 'light' | 'dark';
  primary: `#${string}`;
  'primary-content': `#${string}`;
  secondary: `#${string}`;
  'secondary-content': `#${string}`;
  accent: `#${string}`;
  'accent-content': `#${string}`;
  neutral: `#${string}`;
  'neutral-content': `#${string}`;
  'base-100': `#${string}`;
  'base-200': `#${string}`;
  'base-300': `#${string}`;
  'base-content': `#${string}`;
};

export default function useTheme(): Theme {
  const [theme] = useLocalStorage('theme', 'light');
  return themeColors[
    `[data-theme=${theme}]` as keyof typeof themeColors
  ] as Theme;
}
