import { LINKEDIN } from '@/constants';
import { SectionEnum } from '@/types';

const aboutMe = `
<div>
<b>Hey there!</b> I'm Tenzin, a soon-to-be <b>Computer Science </b> <div class='tooltip tooltip-bottom' data-tip='graduate'>🎓</div> @ <b>UWaterloo</b> with nearly <b>2 years</b> of <div class='tooltip tooltip-bottom' data-tip='work'>🛠</div> <b>experience</b>.
      
I thrive on crafting <b>user-centric</b> features that make a real <b>impact</b>. There's nothing like seeing my work <b>tangibly</b> come to life & leave a <b>positive mark</b> on its users.
      
My toolkit focuses on <b>TypeScript</b>, <b>Next.js</b>, and <b>React</b>, but I'm no stranger to <b>Java</b>, <b>Spring</b>, <b>C#</b>, or <b>Unity</b>

Beyond the world of code, I'm on a <div class='tooltip tooltip-bottom' data-tip='guitar'>🎸</div><b>-learning</b> journey and enjoy diving into the realms of <div class='tooltip tooltip-bottom' data-tip='photography'>📸</div> , <div class='tooltip tooltip-bottom' data-tip='board games'>🎲</div> and <div class='tooltip tooltip-bottom' data-tip='dnd'>🧙🏾‍♂️</div>
      
If you're intrigued by my work, like <b>Metalworks</b> or <b>Strawgolem</b>, don't hesitate to get in touch.
      
Let's <a class='decoration-0' href=${LINKEDIN} target='_blank'><b>connect</b></a> and explore the endless possibilities of tech together!
</div>
`;

const skills = `
<p class='text-center'>Below are some of my skills! I'm always learning new things, so this might be a bit out of date ;)

You can also check out the <a href='#${SectionEnum.PROJECTS}'><b>projects</b></a> and <a href='#${SectionEnum.WORK}'> <b>jobs</b> </a> I've used them in!</p>`;

const contact = `
<p class='text-center'>Wanna get in touch? Lets do it! 🔥

You can read my resume & find me at these socials, or ✍🏽 the form below!</p>`;

export default {
  titles: {
    about: 'About Me',
    skills: 'Skills',
    projects: 'Projects',
    school: 'Education',
    work: 'Experience',
    contact: 'Contact',
  },
  sections: {
    aboutMe,
    skills,
    projects: {
      metalworks: `A full-stack Next.JS / Express.JS application for FoundryVTT hosting on DigitalOcean`,
      website: `The site you're on! made with Next.JS 13, TailwindCSS and DaisyUI`,
      strawgolem: `A minecraft Java mod that adds a farming mob, with over 10 million downloads!`,
    },
    school: {
      waterloo: {
        major: 'Computer Science',
        date: 'Aug 2019 - Dec 2023',
      },
      marianopolis: {
        major: 'Pure and Applied Science',
        date: 'Aug 2017 - June 2019',
      },
    },
    work: {
      vividSeats: {
        date: 'Jan 2023 - Aug 2023',
        role: 'Software Engineer Co-op',
        description:
          'Developed full-stack web and mobile Vivid Seats applications, working on the homepage, checkout, event pages, etc.',
      },
      lifion: {
        date: 'May 2022 - Aug 2022',
        role: 'Software Developer Co-op',
        description:
          'Developed front-end React web applications, mainly working on features related to the sign in and account flows',
      },
      bunch: {
        date: 'Sept 2021 - Dec 2021',
        role: 'Game Developer Co-op',
        description: 'Developed mobile games such as Mars Dash in C# and Unity',
      },
      paramountCommerce: {
        date: 'Jan 2021 - April 2021',
        role: 'Java Developer Co-op',
        description:
          'Developed full-stack Spring Boot web application, improved automated test suites with JUnit, Selenium and Appium',
      },
    },
    contact: {
      content: contact,
      form: {
        name: 'Enter your name',
        email: 'Enter your email',
        phone: 'Enter your phone #',
        message: 'Your message',
      },
    },
  },
  transitions: {
    label: 'Keep Reading',
    content: {
      projects: "Wanna know where I used 'em?",
      work: "Wanna know where I've worked?",
      school: 'Wanna know about my education?',
    },
  },
} as const;
