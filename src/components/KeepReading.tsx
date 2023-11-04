import NavLink from '@/components/nav/NavLink';
import { SectionEnum } from '@/types';
import { TbChevronsDown as IconChevronsDown } from 'react-icons/tb';
import React from 'react';
import classNames from 'classnames';
import { useTranslations } from 'next-intl';

export type KeepReadingProps = {
  section: SectionEnum;
  className?: string;
};

export default function KeepReading({ section, className }: KeepReadingProps) {
  const dict = useTranslations('transitions');
  return (
    <div
      className={classNames(
        'flex flex-col place-content-center gap-2 text-center',
        className
      )}
    >
      <h2 className='text-lg font-extrabold text-secondary'>
        {dict(`content.${section.toString()}`)}
      </h2>
      <NavLink
        className='btn btn-ghost flex h-auto w-fit flex-col self-center rounded-2xl p-4 text-xl'
        section={section}
      >
        <span>{dict('label')}</span>
        <IconChevronsDown size={24} />
      </NavLink>
    </div>
  );
}
