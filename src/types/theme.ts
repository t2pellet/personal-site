export const themes = ['dracula', 'cmyk'] as const; // dark, light
export type Theme = (typeof themes)[number];
export type ThemeColors = {
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
