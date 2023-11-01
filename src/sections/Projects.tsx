import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import ProjectCard, { ProjectCardProps } from '@/components/card/ProjectCard';
import KeepReading from '@/components/KeepReading';

export type ProjectsProps = {
  projects: ProjectCardProps[];
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <PageSection section={SectionEnum.PROJECTS}>
      <div className='mx-auto w-fit'>
        <div className='carousel-center carousel rounded-box -mx-2 max-w-[100vw] space-x-4 p-6 sm:-mx-4 md:mx-0 md:max-w-full'>
          {projects.map((props, idx) => (
            <div key={`project-${idx}`} className='carousel-item relative'>
              <ProjectCard {...props} className='carousel-item' />
            </div>
          ))}
        </div>
      </div>
      <KeepReading
        className='mt-4'
        text={`Wanna know where I've worked?`}
        section={SectionEnum.WORK}
      />
    </PageSection>
  );
}
