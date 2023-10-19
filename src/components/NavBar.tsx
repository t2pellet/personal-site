import React, { useCallback, useEffect, useState } from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import NavBarDropdown from '@/components/NavBarDropdown';
import { SectionEnum, sections } from '@/types';
import classNames from 'classnames';
import NavLink, { NavLinkProps } from '@/components/NavLink';
import NavBarLink from '@/components/NavBarLink';

export default function NavBar() {
  const NavItems = () => {
    return Object.keys(sections).map((section) => {
      const sectionEnum = section as SectionEnum;
      return (
        <li key={`nav-link-${section}`}>
          <NavBarLink className='btn btn-ghost btn-sm' section={sectionEnum} />
        </li>
      );
    });
  };

  const NavRoot = ({ mobile = false }: { mobile?: boolean }) => {
    const classes = classNames('btn btn-ghost text-xl normal-case', {
      ['md:hidden']: mobile,
      ['hidden md:flex']: !mobile,
    });
    return (
      <a className={classes} href='#'>
        <span>
          <span className='font-black text-primary'>tenzin</span>
          <span className='font-normal'>.Live</span>
        </span>
      </a>
    );
  };

  return (
    <div className='navbar sticky top-0 z-50 bg-base-100 px-4 shadow-sm'>
      <div className='navbar-start'>
        <NavBarDropdown>
          <NavItems />
        </NavBarDropdown>
        <NavRoot />
      </div>
      <div className='navbar-center'>
        <ul className='menu menu-horizontal hidden px-1 md:flex'>
          <NavItems />
        </ul>
        <NavRoot mobile />
      </div>
      <div className='navbar-end'>
        <ThemeToggle />
      </div>
    </div>
  );
}
