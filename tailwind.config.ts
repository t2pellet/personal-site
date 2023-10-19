import type { Config } from 'tailwindcss';
import daisyUI from 'daisyui';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyUI],
  daisyui: {
    themes: ['light', 'dracula'],
    darkTheme: 'dracula',
  },
};
export default config;
