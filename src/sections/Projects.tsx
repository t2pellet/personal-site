import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import ProjectCard from '@/components/card/ProjectCard';
import KeepReading from '@/components/KeepReading';

export default function Projects() {
  return (
    <PageSection section={SectionEnum.PROJECTS}>
      <div style={{ height: 544 }}>
        <div
          className='carousel carousel-center absolute inset-x-0 mx-auto w-fit gap-6 p-4'
          style={{ maxWidth: '90vw' }}
        >
          <ProjectCard
            className='carousel-item'
            name='Test'
            description='Its something'
            image='/headshot.jpg'
            link='google.com'
            repository='yahoo.com'
          />
          <ProjectCard
            className='carousel-item'
            name='Test'
            description='Its something'
            image='/headshot.jpg'
            link='google.com'
            repository='yahoo.com'
          />
          <ProjectCard
            className='carousel-item'
            name='Test'
            description='Its something'
            image='/headshot.jpg'
            link='google.com'
            repository='yahoo.com'
          />
          <ProjectCard
            className='carousel-item'
            name='Test'
            description='Its something'
            image='/headshot.jpg'
            link='google.com'
            repository='yahoo.com'
          />
          <ProjectCard
            className='carousel-item'
            name='Test'
            description='Its something'
            image='/headshot.jpg'
            link='google.com'
            repository='yahoo.com'
          />
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
