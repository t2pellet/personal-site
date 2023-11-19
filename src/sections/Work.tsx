import React from 'react';
import PageSection from '@/components/PageSection';
import { Language, SectionEnum } from '@/types';
import Timeline from '@/components/timeline/Timeline';
import { TimelineJob } from '@/components/timeline/event';
import { TimelineJobProps } from '@/components/timeline/event/TimelineJob';
import { useLocale } from 'next-intl';
import getData from '@/util/fetch';
import mapLinks from '@/util/links';
import toDateStr from '@/util/date';

export type WorkData = {
  jobs: TimelineJobProps[];
};

async function getWorkData(lang: Language): Promise<WorkData> {
  const result = await getData('work', lang, 'deep');
  const { jobs: rawJobs } = result.data.attributes;
  const jobs: TimelineJobProps[] = rawJobs.map((job: any) => {
    const { title, role, description, from, to, skills } = job;
    return {
      title,
      role,
      description,
      date: `${toDateStr(from, lang)} - ${toDateStr(to, lang)}`,
      skills: mapLinks(skills),
    };
  });
  return { jobs };
}

export default async function Work() {
  const lang = useLocale();
  const { jobs } = await getWorkData(lang);
  return (
    <PageSection section={SectionEnum.WORK}>
      <Timeline className='mb-8 ml-8 md:mx-auto'>
        {jobs.map((job, idx) => (
          <TimelineJob {...job} key={`job-${idx}`} />
        ))}
      </Timeline>
    </PageSection>
  );
}
