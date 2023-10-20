'use client';

import NavLink, { NavLinkProps } from '@/components/nav/NavLink';
import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SectionEnum, sections } from '@/types';
import useActiveSection from '@/hooks/useActiveSection';

export default function NavBarLink({
  className,
  ...props
}: Omit<NavLinkProps, 'children'>) {
  const activeSection = useActiveSection();

  const classes = classNames(
    'btn btn-lg md:btn-md lg:btn-sm btn-ghost align-middle flex place-content-center text-center text-lg',
    className,
    {
      ['text-info']: activeSection == props.section,
      ['hover:text-info']: activeSection == props.section,
    }
  );

  return (
    <NavLink {...props} className={classes}>
      <span>{sections[props.section as SectionEnum]}</span>
    </NavLink>
  );
}
