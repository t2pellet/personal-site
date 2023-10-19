import * as TablerIcons from '@tabler/icons-react';
import { Icon } from '@tabler/icons-react';
import { TablerIconsProps } from '@tabler/icons-react';

export const themes = ['dracula', 'light'] as const;
export type Theme = (typeof themes)[number];

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
  work: 'Experience',
  projects: 'Projects',
  school: 'Education',
  contact: 'Contact',
};
export type SectionType = (typeof sections)[SectionEnum];

const { createReactComponent, ...Icons } = TablerIcons;
export type IconKey = keyof typeof Icons;
export { Icons };
