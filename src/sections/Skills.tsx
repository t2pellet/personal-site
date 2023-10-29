import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import LabeledIcon, { LabeledIconProps } from '@/components/LabeledIcon';
import NavLink from '@/components/nav/NavLink';
import ContentDiv from '@/components/ContentDiv';
import KeepReading from '@/components/KeepReading';

const SKILLS: LabeledIconProps[] = [
  { icon: 'IconBrandTypescript', name: 'TypeScript' },
  { icon: 'IconBrandNodejs', name: 'Node.JS' },
  { icon: 'IconBrandReact', name: 'React' },
  { icon: 'IconBrandNextjs', name: 'Next.JS' },
  { icon: 'IconBrandSass', name: 'CSS/SASS' },
  { icon: 'IconBrandHtml5', name: 'HTML5' },
];

export default function Skills() {
  return (
    <PageSection section={SectionEnum.SKILLS}>
      <ContentDiv className='mx-auto md:w-3/4 xl:w-2/4'>
        <p className='text-center'>
          {`Below are some of my skills! I'm always learning new things, so this
        might be a bit out of date ;)\n\n`}
          {`You can also check out the `}
          <NavLink section={SectionEnum.PROJECTS}>
            <b>projects</b>
          </NavLink>{' '}
          and{' '}
          <NavLink section={SectionEnum.WORK}>
            <b>jobs</b>
          </NavLink>
          {` I've used them in!`}
        </p>
      </ContentDiv>
      <div className='flex flex-wrap place-content-center gap-4 py-8'>
        {SKILLS.map((skill) => (
          <LabeledIcon key={`skill-${skill}`} {...skill} />
        ))}
      </div>
      <KeepReading
        text={`Wanna know where I used 'em?`}
        section={SectionEnum.PROJECTS}
      />
    </PageSection>
  );
}
