import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import Timeline from '@/components/timeline/Timeline';
import { TimelineSchool } from '@/components/timeline/event';
import NavLink from '@/components/nav/NavLink';
import { IconChevronsDown } from '@tabler/icons-react';

export default function School() {
  return (
    <PageSection section={SectionEnum.SCHOOL}>
      <Timeline className='ml-8 md:mx-auto'>
        <div></div>
        <TimelineSchool
          title='University of Waterloo'
          major='Computer Science'
          date='Sept 2021 - Aug 2023'
          icon={'IconSchool'}
        />
        <TimelineSchool
          title='University of Waterloo'
          major='Computer Science'
          date='Sept 2021 - Aug 2023'
          icon={'IconSchool'}
        />
      </Timeline>
      <NavLink
        className='btn btn-ghost mx-auto mt-4 flex h-auto w-fit flex-col rounded-2xl p-4 text-xl'
        section={SectionEnum.CONTACT}
      >
        <span>{`Let's get in touch`}</span>
        <IconChevronsDown size={24} />
      </NavLink>
    </PageSection>
  );
}
