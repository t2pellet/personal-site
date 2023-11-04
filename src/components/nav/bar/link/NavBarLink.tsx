'use client';

import { NavLinkProps } from '@/components/nav/NavLink';
import React from 'react';
import classNames from 'classnames';
import useActiveSection from '@/hooks/useActiveSection';

export default function NavBarLink({
  className,
  section,
  title,
}: Omit<NavLinkProps, 'children'> & {
  title: string;
}) {
  const activeSection = useActiveSection();

  const classes = classNames(
    'btn btn-lg md:btn-md lg:btn-sm btn-ghost align-middle flex place-content-center text-center text-lg',
    className,
    {
      ['text-secondary']: activeSection == section,
      ['hover:text-secondary']: activeSection == section,
    }
  );

  return (
    <a className={classes} href={`#${section}`}>
      <span>{title}</span>
    </a>
  );
}
