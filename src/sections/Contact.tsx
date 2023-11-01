import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import LabeledIcon, { LabeledIconProps } from '@/components/LabeledIcon';
import React from 'react';
import ContentDiv from '@/components/ContentDiv';
import ContactForm from '@/components/contact-form';

export type ContactProps = {
  links: LabeledIconProps[];
};

export default function Contact({ links }: ContactProps) {
  return (
    <PageSection section={SectionEnum.CONTACT}>
      <ContentDiv className='mx-auto md:w-3/4 xl:w-2/4'>
        <p className='text-center'>
          Wanna get in touch? Lets do it! 🔥
          {'\n\n'}
          You can read my resume & find me at these socials, or ✍🏽 the form
          below!
        </p>
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
