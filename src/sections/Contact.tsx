import PageSection from '@/components/PageSection';
import { Language, SectionEnum } from '@/types';
import LabeledIcon, { LabeledIconProps } from '@/components/LabeledIcon';
import React from 'react';
import ContentDiv from '@/components/ContentDiv';
import ContactForm from '@/components/contact-form';
import { useLocale } from 'next-intl';
import Markdown from 'react-markdown';
import getData from '@/util/fetch';
import mapLinks from '@/util/links';

type ContactData = {
  content: string;
  links: LabeledIconProps[];
};

async function getContactData(lang: Language): Promise<ContactData> {
  const result = await getData('contact', lang);
  return {
    content: result.data.attributes.content,
    links: mapLinks(result.data.attributes.links),
  };
}

export default async function Contact() {
  const locale = useLocale();
  const { content, links } = await getContactData(locale);
  return (
    <PageSection section={SectionEnum.CONTACT}>
      <ContentDiv className='mx-auto text-center md:w-3/4 xl:w-2/4'>
        <Markdown>{content}</Markdown>
      </ContentDiv>
      <div className='flex flex-wrap place-content-center gap-4 py-8'>
        {links.map((skill) => (
          <LabeledIcon key={`social-link-${skill}`} {...skill} />
        ))}
      </div>
      <ContactForm />
    </PageSection>
  );
}
