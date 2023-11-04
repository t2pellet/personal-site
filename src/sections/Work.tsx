import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import Timeline from '@/components/timeline/Timeline';
import { TimelineJob } from '@/components/timeline/event';
import KeepReading from '@/components/KeepReading';
import { TimelineJobProps } from '@/components/timeline/event/TimelineJob';
import { useTranslations } from 'next-intl';

type WorkProp = Omit<TimelineJobProps, 'description' | 'date' | 'role'> & {
  id: string;
};

export type WorkProps = {
  jobs: WorkProp[];
};

export default function Work({ jobs }: WorkProps) {
  const dict = useTranslations('sections.work');
  return (
    <PageSection section={SectionEnum.WORK}>
      <Timeline className='ml-8 md:mx-auto'>
        {jobs.map((job, idx) => (
          <TimelineJob
            {...job}
            description={dict(`${job.id}.description`)}
            date={dict(`${job.id}.date`)}
            role={dict(`${job.id}.role`)}
            key={`job-${idx}`}
          />
        ))}
      </Timeline>
      <KeepReading className='mt-6' section={SectionEnum.SCHOOL} />
    </PageSection>
  );
}
