import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import SkillIcon, { SkillIconProps } from '@/components/SkillIcon';
import NavLink from '@/components/NavLink';
import ContentDiv from '@/components/ContentDiv';

const SKILLS: SkillIconProps[] = [
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
      <ContentDiv className='mx-auto w-2/4'>
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
      <div className='flex place-content-center space-x-4 py-8'>
        {SKILLS.map((skill) => (
          <SkillIcon key={`skill-${skill}`} {...skill} />
        ))}
      </div>
    </PageSection>
  );
}
