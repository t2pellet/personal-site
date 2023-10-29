import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import Timeline from '@/components/timeline/Timeline';
import { TimelineJob } from '@/components/timeline/event';
import KeepReading from '@/components/KeepReading';

export default function Work() {
  return (
    <PageSection section={SectionEnum.WORK}>
      <Timeline className='ml-8 md:mx-auto'>
        <div></div>
        <TimelineJob
          title='A job'
          role='Software Engineer'
          date='Sept 2021 - Aug 2023'
          description='I did some work'
          icon={'Icon12Hours'}
          skills={[
            { name: 'React', icon: 'IconBrandReact' },
            { name: 'Next.JS', icon: 'IconBrandNextjs' },
          ]}
        />
        <TimelineJob
          title='A job'
          role='Software Engineer'
          date='Sept 2021 - Aug 2023'
          description='I did some work'
          icon={'Icon12Hours'}
          skills={[
            { name: 'React', icon: 'IconBrandReact' },
            { name: 'Next.JS', icon: 'IconBrandNextjs' },
          ]}
        />
      </Timeline>
      <KeepReading
        className='mt-6'
        text={`Wanna know about my education?`}
        section={SectionEnum.SCHOOL}
      />
    </PageSection>
  );
}
