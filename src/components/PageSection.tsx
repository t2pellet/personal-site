import React, { PropsWithChildren } from 'react';
import { SectionEnum, sections } from '@/types';

export type SectionProps = PropsWithChildren<{
  section: SectionEnum;
  hideTitle?: boolean;
}>;

export default function PageSection({
  section,
  children,
  hideTitle = false,
}: SectionProps) {
  return (
    <div id={section} className='flex w-full flex-col'>
      {!hideTitle && (
        <h1 className='mb-12 text-center text-5xl font-extrabold'>
          {sections[section]}
        </h1>
      )}
      <div>{children}</div>
    </div>
  );
}