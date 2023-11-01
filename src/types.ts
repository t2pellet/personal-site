import * as TbIcons from 'react-icons/tb';
import * as FaIcons from 'react-icons/fa6';
import * as SiIcons from 'react-icons/si';

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

export enum SectionEnum {
  ABOUT = 'about',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  WORK = 'work',
  SCHOOL = 'school',
  CONTACT = 'contact',
}
export const sections: Record<SectionEnum, string> = {
  about: 'About',
  skills: 'Skills',
  projects: 'Projects',
  work: 'Experience',
  school: 'Education',
  contact: 'Contact',
};

export const Icons = {
  ...TbIcons,
  ...FaIcons,
  ...SiIcons,
};
export type IconKey = keyof typeof Icons;
