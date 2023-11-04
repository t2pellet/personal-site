import { LabeledIconProps } from '@/components/LabeledIcon';
import { ProjectCardProps } from '@/components/card/ProjectCard';
import { WorkProps } from '@/sections/Work';
import { SchoolProps } from '@/sections/School';

const LINKEDIN = 'https://linkedin.com/in/t2pellet';
const CONTACT_LINKS: LabeledIconProps[] = [
  {
    icon: 'TbBrandGithub',
    name: 'GitHub',
    href: 'https://github.com/t2pellet',
  },
  {
    icon: 'TbBrandLinkedin',
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/t2pellet',
  },
  { icon: 'TbMail', name: 'E-Mail', href: 'mailto:t2pellet@uwaterloo.ca' },
  { icon: 'TbPhone', name: 'Phone', href: 'tel:+15145704380' },
];
const PROJECTS: ProjectCardProps[] = [
  {
    name: 'Metalworks',
    id: 'metalworks',
    image: '/img/metalworks.png',
    link: 'https://dnd.tenzin.live',
    repository: 'https://github.com/orgs/Foundry-Metalworks/repositories',
  },
  {
    name: 'Tenzin.live',
    id: 'website',
    image: '/img/website.png',
    repository: 'https://github.com/t2pellet/tenzin.live',
  },
  {
    name: 'StrawGolem',
    id: 'strawgolem',
    image: '/img/strawgolem.png',
    link: 'https://www.curseforge.com/minecraft/mc-mods/strawgolem-reborn',
    repository: 'https://github.com/t2pellet/strawgolem',
  },
];
const SCHOOLS: SchoolProps['schools'] = [
  {
    title: 'University of Waterloo',
    id: 'waterloo',
  },
  {
    title: 'Marianopolis College',
    id: 'marianopolis',
  },
];
const SKILLS: LabeledIconProps[] = [
  { icon: 'TbBrandNextjs', name: 'Next.JS' },
  { icon: 'TbBrandReact', name: 'React' },
  { icon: 'SiExpress', name: 'Express.JS' },
  { icon: 'TbBrandNodejs', name: 'Node.JS' },
  { icon: 'TbBrandReactNative', name: 'React Native' },
  { icon: 'TbBrandSass', name: 'CSS/SASS' },
  { icon: 'TbBrandTailwind', name: 'TailwindCSS' },
  { icon: 'TbBrandHtml5', name: 'HTML5' },
  { icon: 'SiRedux', name: 'Redux' },
  { icon: 'TbBrandTypescript', name: 'TypeScript' },
  { icon: 'FaJava', name: 'Java' },
  { icon: 'SiSpring', name: 'Spring ' },
  { icon: 'SiCsharp', name: 'C#' },
  { icon: 'SiUnity', name: 'Unity' },
  { icon: 'SiJunit5', name: 'JUnit' },
  { icon: 'SiJest', name: 'Jest' },
  { icon: 'SiSelenium', name: 'Selenium' },
];
const JOBS: WorkProps['jobs'] = [
  {
    title: 'Vivid Seats',
    id: 'vividSeats',
    skills: [
      { icon: 'TbBrandNextjs', name: 'TypeScript' },
      { icon: 'TbBrandReact', name: 'React' },
      { icon: 'SiExpress', name: 'Express.JS' },
      { icon: 'TbBrandNodejs', name: 'Node.JS' },
      { icon: 'TbBrandReactNative', name: 'React Native' },
      { icon: 'SiJest', name: 'Jest' },
    ],
  },
  {
    title: 'Lifion by ADP',
    id: 'lifion',
    skills: [
      { icon: 'TbBrandReact', name: 'React' },
      { icon: 'TbBrandNodejs', name: 'Node.JS' },
      { icon: 'SiRedux', name: 'Redux' },
      { icon: 'SiJest', name: 'Jest' },
    ],
  },
  {
    title: 'Bunch',
    id: 'bunch',
    skills: [
      { icon: 'SiCsharp', name: 'C#' },
      { icon: 'SiUnity', name: 'Unity' },
    ],
  },
  {
    title: 'Paramount Commerce',
    id: 'paramountCommerce',
    skills: [
      { icon: 'FaJava', name: 'Java' },
      { icon: 'SiSpring', name: 'Spring ' },
      { icon: 'SiJunit5', name: 'JUnit' },
      { icon: 'SiSelenium', name: 'Selenium' },
    ],
  },
];

export { LINKEDIN, CONTACT_LINKS, PROJECTS, SCHOOLS, SKILLS, JOBS };
