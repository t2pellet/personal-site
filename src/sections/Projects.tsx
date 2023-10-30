import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import ProjectCard, { ProjectCardProps } from '@/components/card/ProjectCard';
import KeepReading from '@/components/KeepReading';

const PROJECTS: ProjectCardProps[] = [
  {
    name: 'Test',
    description: `It's something`,
    image: '/headshot.jpg',
    link: 'google.com',
    repository: 'github.com',
  },
  {
    name: 'Test',
    description: `It's something`,
    image: '/headshot.jpg',
    link: 'google.com',
    repository: 'github.com',
  },
  {
    name: 'Test',
    description: `It's something`,
    image: '/headshot.jpg',
    link: 'google.com',
    repository: 'github.com',
  },
  {
    name: 'Test',
    description: `It's something`,
    image: '/headshot.jpg',
    link: 'google.com',
    repository: 'github.com',
  },
  {
    name: 'Test',
    description: `It's something`,
    image: '/headshot.jpg',
    link: 'google.com',
    repository: 'github.com',
  },
];

export default function Projects() {
  return (
    <PageSection section={SectionEnum.PROJECTS}>
      <div className='carousel carousel-center rounded-box -mx-2 max-w-[100vw] space-x-4 p-6 sm:-mx-4 md:mx-0 md:max-w-full'>
        {PROJECTS.map((props, idx) => (
          <div key={`project-${idx}`} className='carousel-item relative'>
            <ProjectCard
              {...props}
              id={`project-${idx}`}
              className='carousel-item'
            />
          </div>
        ))}
      </div>
      <KeepReading
        className='mt-4'
        text={`Wanna know where I've worked?`}
        section={SectionEnum.WORK}
      />
    </PageSection>
  );
}
