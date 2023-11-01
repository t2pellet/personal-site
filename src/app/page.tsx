import AboutMe from '@/sections/AboutMe';
import './globals.css';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';
import Work from '@/sections/Work';
import School from '@/sections/School';
import Contact from '@/sections/Contact';
import {
  ABOUT_ME,
  CONTACT_LINKS,
  JOBS,
  PROJECTS,
  SCHOOLS,
  SKILLS,
} from '@/constants';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between space-y-16 p-2 pb-12 sm:px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-36'>
      <AboutMe aboutMeContent={ABOUT_ME} />
      <Skills skills={SKILLS} />
      <Projects projects={PROJECTS} />
      <Work jobs={JOBS} />
      <School schools={SCHOOLS} />
      <Contact links={CONTACT_LINKS} />
    </main>
  );
}
