'use client';

import React, {
  LinkHTMLAttributes,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { SectionEnum } from '@/types';
import classNames from 'classnames';
import { act } from 'react-dom/test-utils';

export type NavLinkProps = Omit<LinkHTMLAttributes<any>, 'href'> &
  PropsWithChildren<{
    section: SectionEnum;
  }>;

export default function NavLink({
  className,
  section,
  children,
}: NavLinkProps) {
  return (
    <a className={className} href={`#${section}`}>
      {children}
    </a>
  );
}
