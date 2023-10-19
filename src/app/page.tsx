import AboutMe from '@/sections/AboutMe';
import './globals.css';
import Skills from '@/sections/Skills';
import Particles from '@/components/Particles';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between space-y-16 p-4 sm:px-12 md:px-24 lg:px-36 xl:px-48'>
      <AboutMe />
      <Skills />
    </main>
  );
}
