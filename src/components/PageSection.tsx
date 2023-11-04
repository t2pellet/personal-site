import React, { PropsWithChildren } from 'react';
import { SectionEnum } from '@/types';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

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
  const dict = useTranslations('titles');
  return (
    <div id={section} className={classNames('flex w-full flex-col', className)}>
      {!hideTitle && (
        <h1 className='mb-12 text-center text-5xl font-extrabold'>
          {dict(section)}
        </h1>
      )}
      <div>{children}</div>
    </div>
  );
}
