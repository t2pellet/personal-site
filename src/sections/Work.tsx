import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import Timeline from '@/components/timeline/Timeline';
import { TimelineJob } from '@/components/timeline/event';
import KeepReading from '@/components/KeepReading';
import { TimelineJobProps } from '@/components/timeline/event/TimelineJob';

export type WorkProps = {
  jobs: TimelineJobProps[];
};

export default function Work({ jobs }: WorkProps) {
  return (
    <PageSection section={SectionEnum.WORK}>
      <Timeline className='ml-8 md:mx-auto'>
        {jobs.map((job, idx) => (
          <TimelineJob {...job} key={`job-${idx}`} />
        ))}
      </Timeline>
      <KeepReading
        className='mt-6'
        text={`Wanna know about my education?`}
        section={SectionEnum.SCHOOL}
      />
    </PageSection>
  );
}
