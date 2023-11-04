import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import LabeledIcon, { LabeledIconProps } from '@/components/LabeledIcon';
import ContentDiv from '@/components/ContentDiv';
import KeepReading from '@/components/KeepReading';
import { useTranslations } from 'next-intl';
import { Markup } from 'interweave';

export type SkillsProps = {
  skills: LabeledIconProps[];
};

export default function Skills({ skills }: SkillsProps) {
  const dict = useTranslations('sections');
  return (
    <PageSection section={SectionEnum.SKILLS}>
      <ContentDiv className='mx-auto md:w-3/4 xl:w-2/4'>
        <Markup content={dict.raw('skills')} />
      </ContentDiv>
      <div className='mx-auto flex max-w-screen-lg flex-wrap place-content-center gap-4 py-8'>
        {skills.map((skill, idx) => (
          <LabeledIcon key={`skill-${idx}`} {...skill} />
        ))}
      </div>
      <KeepReading section={SectionEnum.PROJECTS} />
    </PageSection>
  );
}
