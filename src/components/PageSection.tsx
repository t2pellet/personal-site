import React, { PropsWithChildren } from 'react';
import { SectionEnum, sections } from '@/types';
import classNames from 'classnames';

export type SectionProps = PropsWithChildren<{
  section: SectionEnum;
  hideTitle?: boolean;
  className?: string;
}>;

export default function PageSection({
  section,
  children,
  hideTitle = false,
  className,
}: SectionProps) {
  return (
    <div
      id={section}
      className={classNames('flex w-full flex-col px-4 md:px-0', className)}
    >
      {!hideTitle && (
        <h1 className='mb-12 text-center text-5xl font-extrabold'>
          {sections[section]}
        </h1>
      )}
      <div>{children}</div>
    </div>
  );
}
