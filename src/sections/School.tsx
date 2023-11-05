import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import Timeline from '@/components/timeline/Timeline';
import { TimelineSchool } from '@/components/timeline/event';
import NavLink from '@/components/nav/NavLink';
import { TbChevronsDown } from 'react-icons/tb';
import { TimelineSchoolProps } from '@/components/timeline/event/TimelineSchool';
import { useTranslations } from 'next-intl';

type SchoolProp = { id: string } & Omit<TimelineSchoolProps, 'major' | 'date'>;

export type SchoolProps = {
  schools: SchoolProp[];
};

export default function School({ schools }: SchoolProps) {
  const transitions = useTranslations('transitions.content');
  const dict = useTranslations('sections.school');
  return (
    <PageSection section={SectionEnum.SCHOOL}>
      <Timeline className='ml-8 md:mx-auto'>
        {schools.map((school, idx) => (
          <TimelineSchool
            {...school}
            major={dict(`${school.id}.major`)}
            date={dict(`${school.id}.date`)}
            key={`school-${idx}`}
          />
        ))}
      </Timeline>
      <NavLink
        className='btn btn-ghost mx-auto mt-4 flex h-auto w-fit flex-col rounded-2xl p-4 text-xl'
        section={SectionEnum.CONTACT}
      >
        <span>{transitions('contact')}</span>
        <TbChevronsDown size={24} />
      </NavLink>
    </PageSection>
  );
}
