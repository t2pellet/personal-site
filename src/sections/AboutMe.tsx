import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import Image from 'next/image';
import headshotPic from '../../public/headshot.jpg';
import '@/app/globals.css';
import NavLink from '@/components/nav/NavLink';
import ContentDiv from '@/components/ContentDiv';

const LINKEDIN = 'https://linkedin.com/in/t2pellet';
const ABOUT_ME = (
  <div>
    <b>Hey there!</b> {`I'm Tenzin, a soon-to-be `}
    <b>Computer Science </b>
    <div className='tooltip tooltip-bottom' data-tip='graduate'>
      🎓
    </div>
    {` @ `}
    <b>UWaterloo</b>
    {' with nearly '}
    <b>2 years</b>
    {' of '}
    <div className='tooltip tooltip-bottom' data-tip='work'>
      🛠
    </div>
    <b> experience</b>
    {`.\n\n`}
    {`I thrive on crafting `}
    <b>user-centric</b>
    {` features that make a real `}
    <b>impact</b>
    {`. There's nothing like seeing my work `}
    <b>tangibly</b>
    {` come to life & leave a `}
    <b>positive mark</b>
    {` on its users.\n\n`}
    {`My toolkit focuses on `}
    <b>TypeScript</b>, <b>Next.js</b>, and <b>React</b>
    {`, but I'm no stranger to `}
    <b>Java</b>, <b>Spring</b>, <b>C#</b>, or <b>Unity</b>
    {`\n\n`}
    {`Beyond the world of code, I'm on a `}
    <div className='tooltip tooltip-bottom' data-tip='guitar'>
      🎸
    </div>
    <b>-learning</b>
    {` journey and enjoy diving into the realms of `}
    <div className='tooltip tooltip-bottom' data-tip='photography'>
      📸
    </div>
    {' , '}
    <div className='tooltip tooltip-bottom' data-tip='board games'>
      🎲
    </div>
    {' and '}
    <div className='tooltip tooltip-bottom' data-tip='dnd'>
      🧙🏾‍♂️
    </div>
    {`.\n\nIf you're intrigued by my work, like `}
    <b>Metalworks</b>
    {` or `}
    <b>Strawgolem</b>
    {`, don't hesitate to get in touch.\n\n`}
    {`Let's `}
    <a className='decoration-0' href={LINKEDIN} target='_blank'>
      <b>connect</b>
    </a>
    {` and explore the endless possibilities of tech together!\n`}
  </div>
);

export default function AboutMe() {
  return (
    <PageSection section={SectionEnum.ABOUT} hideTitle>
      <div className='relative grid w-full grid-cols-1 gap-4 leading-snug lg:grid-cols-2'>
        <div className='pt-4 sm:px-1 md:px-2 lg:px-4 xl:place-content-start xl:px-8 xl:pt-12'>
          <Image
            src={headshotPic}
            alt='Tenzin Pelletier'
            className='mx-auto w-3/4 rounded-2xl shadow-md lg:w-full xl:rounded-3xl'
            priority
          />
        </div>
        <div className='flex flex-col place-content-between pb-4 sm:px-1 md:px-2 lg:px-4 xl:px-8 xl:pt-12'>
          <div className='text-center text-7xl leading-snug tracking-tight md:whitespace-nowrap lg:text-left'>
            <span className='font-black text-primary'>Tenzin</span> Pelletier
          </div>
          <ContentDiv className='text-center lg:text-left'>
            {ABOUT_ME}
          </ContentDiv>
          <div className='mt-4 flex place-content-center gap-6'>
            <NavLink
              className='btn btn-outline w-36'
              section={SectionEnum.SKILLS}
            >
              Read More
            </NavLink>
            <NavLink
              className='btn btn-primary w-36'
              section={SectionEnum.CONTACT}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
