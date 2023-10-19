'use client';

import NavLink, { NavLinkProps } from '@/components/NavLink';
import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SectionEnum, sections } from '@/types';
import useActiveSection from '@/hooks/useActiveSection';

export default function NavBarLink(props: Omit<NavLinkProps, 'children'>) {
  const activeSection = useActiveSection();

  const classes = classNames('btn btn-sm', {
    ['text-info']: activeSection == props.section,
    ['btn-ghost']: activeSection != props.section,
  });

  return (
    <NavLink {...props} className={classes}>
      {sections[props.section as SectionEnum]}
    </NavLink>
  );
}
