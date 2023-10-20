import themeColors from 'daisyui/src/theming/themes';
import { ThemeColors } from '@/types';
import { useContext } from 'react';
import ThemeContext from '@/context/ThemeContext';

// REQUIRES THEME CONTEXT
export default function useThemeColors(): ThemeColors {
  const { theme } = useContext(ThemeContext);

  return themeColors[
    `[data-theme=${theme}]` as keyof typeof themeColors
  ] as ThemeColors;
}
