import NavLink from '@/components/nav/NavLink';
import { SectionEnum } from '@/types';
import { TbChevronsDown as IconChevronsDown } from 'react-icons/tb';
import React from 'react';
import classNames from 'classnames';

export type KeepReadingProps = {
  text: string;
  section: SectionEnum;
  className?: string;
};

export default function KeepReading({
  text,
  section,
  className,
}: KeepReadingProps) {
  return (
    <div
      className={classNames(
        'flex flex-col place-content-center gap-2 text-center',
        className
      )}
    >
      <h2 className='text-lg font-extrabold text-secondary'>{text}</h2>
      <NavLink
        className='btn btn-ghost flex h-auto w-fit flex-col self-center rounded-2xl p-4 text-xl'
        section={section}
      >
        <span>Keep Reading</span>
        <IconChevronsDown size={24} />
      </NavLink>
    </div>
  );
}
