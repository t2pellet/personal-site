import React from 'react';
import PageSection from '@/components/PageSection';
import { Language, SectionEnum } from '@/types';
import LabeledIcon, { LabeledIconProps } from '@/components/LabeledIcon';
import ContentDiv from '@/components/ContentDiv';
import { useLocale } from 'next-intl';
import getData from '@/util/fetch';
import mapLinks from '@/util/links';
import { Markup } from 'interweave';

export type SkillsData = {
  content: string;
  skills: LabeledIconProps[];
};

async function getSkillsData(lang: Language): Promise<SkillsData> {
  const result = await getData('skill', lang);
  const { attributes } = result.data;
  const { content, skills } = attributes;
  return {
    content,
    skills: mapLinks(skills),
  };
}

export default async function Skills() {
  const lang = useLocale();
  const { skills, content } = await getSkillsData(lang);
  return (
    <PageSection section={SectionEnum.SKILLS}>
      <ContentDiv className='mx-auto text-center md:w-3/4 xl:w-2/4'>
        <Markup content={content} />
      </ContentDiv>
      <div className='mx-auto flex max-w-screen-lg flex-wrap place-content-center gap-4 py-8'>
        {skills.map((skill, idx) => (
          <LabeledIcon key={`skill-${idx}`} {...skill} />
        ))}
      </div>
    </PageSection>
  );
}
