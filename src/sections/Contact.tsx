import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import LabeledIcon, { LabeledIconProps } from '@/components/LabeledIcon';
import React from 'react';
import ContentDiv from '@/components/ContentDiv';
import ContactForm from '@/components/contact-form';

const LINKS: LabeledIconProps[] = [
  {
    icon: 'IconBrandGithub',
    name: 'GitHub',
    href: 'https://github.com/t2pellet',
  },
  {
    icon: 'IconBrandLinkedin',
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/t2pellet',
  },
  { icon: 'IconMail', name: 'E-Mail', href: 'mailto:t2pellet@uwaterloo.ca' },
  { icon: 'IconPhone', name: 'Phone', href: 'tel:+15145704380' },
];

export default function Contact() {
  return (
    <PageSection section={SectionEnum.CONTACT}>
      <ContentDiv className='mx-auto md:w-3/4 xl:w-2/4'>
        <p className='text-center'>
          Wanna get in touch? Lets do it! 🔥
          {'\n\n'}
          You can find me at these socials, or ✍🏽 the form below!
        </p>
      </ContentDiv>
      <div className='flex flex-wrap place-content-center gap-4 py-8'>
        {LINKS.map((skill) => (
          <LabeledIcon key={`social-link-${skill}`} {...skill} />
        ))}
      </div>
      <ContactForm />
    </PageSection>
  );
}
