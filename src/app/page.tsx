import AboutMe from '@/sections/AboutMe';
import './globals.css';
import Skills from '@/sections/Skills';
import Projects from '@/sections/Projects';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between space-y-16 p-2 pb-12 sm:px-4 md:px-8 lg:px-12 xl:px-24 2xl:px-36'>
      <AboutMe />
      <Skills />
      <Projects />
    </main>
  );
}
