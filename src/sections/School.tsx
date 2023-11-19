import React from 'react';
import PageSection from '@/components/PageSection';
import { Language, SectionEnum } from '@/types';
import Timeline from '@/components/timeline/Timeline';
import { TimelineSchool } from '@/components/timeline/event';
import { TimelineSchoolProps } from '@/components/timeline/event/TimelineSchool';
import { useLocale } from 'next-intl';
import getData from '@/util/fetch';
import toDateStr from '@/util/date';

export type SchoolData = {
  schools: TimelineSchoolProps[];
};

async function getSchoolData(lang: Language): Promise<SchoolData> {
  const result = await getData('school', lang);
  const { schools: rawSchools } = result.data.attributes;
  const schools: TimelineSchoolProps[] = rawSchools.map((school: any) => {
    const { title, major, from, to } = school;
    return {
      title,
      major,
      date: `${toDateStr(from, lang)} - ${toDateStr(to, lang)}`,
    };
  });
  return { schools };
}

export default async function School() {
  const lang = useLocale();
  const { schools } = await getSchoolData(lang);
  return (
    <PageSection section={SectionEnum.SCHOOL}>
      <Timeline className='mb-8 ml-8 md:mx-auto'>
        {schools.map((school, idx) => (
          <TimelineSchool {...school} key={`school-${idx}`} />
        ))}
      </Timeline>
    </PageSection>
  );
}
