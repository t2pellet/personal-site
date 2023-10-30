import React from 'react';
import ThemeToggle from '@/components/toggle/ThemeToggle';
import NavBarDropdown from '@/components/nav/bar/NavBarDropdown';
import { SectionEnum, sections } from '@/types';
import classNames from 'classnames';
import NavBarLink from '@/components/nav/bar/NavBarLink';
import ParticleToggle from '@/components/toggle/ParticleToggle';

export default function NavBar() {
  const NavItems = () => {
    return Object.keys(sections).map((section) => {
      const sectionEnum = section as SectionEnum;
      return (
        <li key={`nav-link-${section}`}>
          <NavBarLink section={sectionEnum} />
        </li>
      );
    });
  };

  const NavRoot = ({ mobile = false }: { mobile?: boolean }) => {
    const classes = classNames('btn btn-ghost text-xl normal-case', {
      ['min-[890px]:hidden']: mobile,
      ['hidden min-[890px]:flex']: !mobile,
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
        <ul className='menu menu-horizontal hidden px-1 min-[890px]:flex'>
          <NavItems />
        </ul>
        <NavRoot mobile />
      </div>
      <div className='navbar-end space-x-2 min-[890px]:space-x-4'>
        <ParticleToggle />
        <ThemeToggle />
      </div>
    </div>
  );
}
