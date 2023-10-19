import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import Image from 'next/image';
import headshotPic from '../../public/headshot.jpg';
import '@/app/globals.css';
import NavLink from '@/components/NavLink';
import ContentDiv from '@/components/ContentDiv';

const ABOUT_ME = (
  <p>
    <b>Hey there!</b> {`I'm Tenzin, a soon-to-be `}
    <b>Computer Science</b>
    {` grad @ `}
    <b>UWaterloo</b>
    {`.\n\n`}
    {`I thrive on crafting `}
    <b>user-centric</b>
    {` features that make a real `}
    <b>impact</b>
    {`. There's nothing quite like seeing my work `}
    <b>tangibly</b>
    {` come to life and leave a `}
    <b>positive mark</b>
    {` on its users.\n\n`}
    {`My tech toolkit focuses on `}
    <b>TypeScript</b>, <b>Next.js</b>, and <b>React</b>
    {`, but I'm not a stranger to `}
    <b>Java</b>, <b>Spring</b>, <b>C#</b>, or <b>Unity</b>
    {`\n\n`}
    {`Beyond the world of code, I'm on a `}
    <b>guitar-learning</b>
    {` journey and enjoy diving into the realms of `}
    <b>photography</b>
    {`, `}
    <b>board games</b>
    {`, and `}
    <b>D&D.</b>
    {`\n\nIf you're intrigued by what I've created, like `}
    <b>Metalworks</b>
    {` or `}
    <b>Strawgolem</b>
    {`, don't hesitate to get in touch.\n\n`}
    {`Let's `}
    <b>connect</b>
    {` and explore the endless possibilities of tech together!\n`}
  </p>
);

export default function AboutMe() {
  return (
    <PageSection section={SectionEnum.ABOUT} hideTitle>
      <div className='relative grid w-full grid-cols-1 gap-4 leading-snug md:grid-cols-2'>
        <div className='px-4 md:px-12 lg:px-16'>
          <Image
            src={headshotPic}
            alt='Tenzin Pelletier'
            className='rounded-xl shadow-md lg:rounded-2xl xl:rounded-3xl'
            priority
          />
        </div>
        <div className='flex flex-col place-content-between px-4 pb-4 pt-12 md:px-8'>
          <div className='text-7xl leading-snug tracking-tight'>
            <span className='font-black text-primary'>Tenzin</span> Pelletier
          </div>
          <ContentDiv>{ABOUT_ME}</ContentDiv>
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
