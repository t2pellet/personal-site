import React from 'react';
import { LabeledIconProps } from '@/components/LabeledIcon';
import { ProjectCardProps } from '@/components/card/ProjectCard';
import { TimelineSchoolProps } from '@/components/timeline/event/TimelineSchool';
import { WorkProps } from '@/sections/Work';

const LINKEDIN = 'https://linkedin.com/in/t2pellet';
const ABOUT_ME = (
  <div>
    <b>Hey there!</b> {`I'm Tenzin, a soon-to-be `}
    <b>Computer Science </b>
    <div className='tooltip tooltip-bottom' data-tip='graduate'>
      🎓
    </div>
    {` @ `}
    <b>UWaterloo</b>
    {' with nearly '}
    <b>2 years</b>
    {' of '}
    <div className='tooltip tooltip-bottom' data-tip='work'>
      🛠
    </div>
    <b> experience</b>
    {`.\n\n`}
    {`I thrive on crafting `}
    <b>user-centric</b>
    {` features that make a real `}
    <b>impact</b>
    {`. There's nothing like seeing my work `}
    <b>tangibly</b>
    {` come to life & leave a `}
    <b>positive mark</b>
    {` on its users.\n\n`}
    {`My toolkit focuses on `}
    <b>TypeScript</b>, <b>Next.js</b>, and <b>React</b>
    {`, but I'm no stranger to `}
    <b>Java</b>, <b>Spring</b>, <b>C#</b>, or <b>Unity</b>
    {`\n\n`}
    {`Beyond the world of code, I'm on a `}
    <div className='tooltip tooltip-bottom' data-tip='guitar'>
      🎸
    </div>
    <b>-learning</b>
    {` journey and enjoy diving into the realms of `}
    <div className='tooltip tooltip-bottom' data-tip='photography'>
      📸
    </div>
    {' , '}
    <div className='tooltip tooltip-bottom' data-tip='board games'>
      🎲
    </div>
    {' and '}
    <div className='tooltip tooltip-bottom' data-tip='dnd'>
      🧙🏾‍♂️
    </div>
    {`.\n\nIf you're intrigued by my work, like `}
    <b>Metalworks</b>
    {` or `}
    <b>Strawgolem</b>
    {`, don't hesitate to get in touch.\n\n`}
    {`Let's `}
    <a className='decoration-0' href={LINKEDIN} target='_blank'>
      <b>connect</b>
    </a>
    {` and explore the endless possibilities of tech together!\n`}
  </div>
);
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
  { icon: 'TbFileCv', name: 'Resume', href: 'docs/resume.pdf' },
];
const PROJECTS: ProjectCardProps[] = [
  {
    name: 'Metalworks',
    description: `A full-stack Next.JS / Express.JS application for FoundryVTT hosting on DigitalOcean`,
    image: '/img/metalworks.png',
    link: 'https://dnd.tenzin.live',
    repository: 'https://github.com/orgs/Foundry-Metalworks/repositories',
  },
  {
    name: 'Tenzin.live',
    description: `The site you're on! made with Next.JS 13, TailwindCSS and DaisyUI`,
    image: '/img/website.png',
    repository: 'https://github.com/t2pellet/tenzin.live',
  },
  {
    name: 'StrawGolem',
    description: `A minecraft Java mod that adds a farming mob, with over 10 million downloads!`,
    image: '/img/strawgolem.png',
    link: 'https://www.curseforge.com/minecraft/mc-mods/strawgolem-reborn',
    repository: 'https://github.com/t2pellet/strawgolem',
  },
];
const SCHOOLS: TimelineSchoolProps[] = [
  {
    title: 'University of Waterloo',
    major: 'Computer Science',
    date: 'Aug 2019-Dec 2023',
  },
  {
    title: 'Marianopolis College',
    major: 'Pure and Applied Science',
    date: 'Aug 2017 - June 2019',
  },
];
const SKILLS: LabeledIconProps[] = [
  { icon: 'TbBrandNextjs', name: 'TypeScript' },
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
    date: 'Jan 2023 - Aug 2023',
    role: 'Software Engineer Co-op',
    description:
      'Developed full-stack web and mobile Vivid Seats applications, working on the homepage, checkout, event pages, etc.',
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
    date: 'May 2022 - Aug 2022',
    role: 'Software Developer Co-op',
    description:
      'Developed front-end React web applications, mainly working on features related to the sign in and account flows',
    skills: [
      { icon: 'TbBrandReact', name: 'React' },
      { icon: 'TbBrandNodejs', name: 'Node.JS' },
      { icon: 'SiRedux', name: 'Redux' },
      { icon: 'SiJest', name: 'Jest' },
    ],
  },
  {
    title: 'Bunch',
    date: 'Sept 2021 - Dec 2021',
    role: 'Game Developer Co-op',
    description: 'Developed mobile games such as Mars Dash in C# and Unity',
    skills: [
      { icon: 'SiCsharp', name: 'C#' },
      { icon: 'SiUnity', name: 'Unity' },
    ],
  },
  {
    title: 'Paramount Commerce',
    date: 'Jan 2021 - April 2021',
    role: 'Java Developer Co-op',
    description:
      'Developed full-stack Spring Boot web application, improved automated test suites with JUnit, Selenium and Appium',
    skills: [
      { icon: 'FaJava', name: 'Java' },
      { icon: 'SiSpring', name: 'Spring ' },
      { icon: 'SiJunit5', name: 'JUnit' },
      { icon: 'SiSelenium', name: 'Selenium' },
    ],
  },
];

export { LINKEDIN, ABOUT_ME, CONTACT_LINKS, PROJECTS, SCHOOLS, SKILLS, JOBS };
