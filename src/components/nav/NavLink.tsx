import React, { LinkHTMLAttributes, PropsWithChildren } from 'react';
import { SectionEnum } from '@/types';

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
