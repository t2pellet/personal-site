import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import LabeledIcon, { LabeledIconProps } from '@/components/LabeledIcon';
import React from 'react';
import ContentDiv from '@/components/ContentDiv';
import ContactForm from '@/components/contact-form';
import { useLocale, useTranslations } from 'next-intl';
import { Markup } from 'interweave';

export type ContactProps = {
  links: LabeledIconProps[];
};

export default function Contact({ links }: ContactProps) {
  const dict = useTranslations('sections');
  const locale = useLocale();
  return (
    <PageSection section={SectionEnum.CONTACT}>
      <ContentDiv className='mx-auto md:w-3/4 xl:w-2/4'>
        <Markup content={dict.raw('contact.content')} />
      </ContentDiv>
      <div className='flex flex-wrap place-content-center gap-4 py-8'>
        {links.map((skill) => (
          <LabeledIcon key={`social-link-${skill}`} {...skill} />
        ))}
        <LabeledIcon
          icon='TbFileCv'
          name='Resumé'
          href={`docs/${locale}/resume.pdf`}
        />
      </div>
      <ContactForm />
    </PageSection>
  );
}
