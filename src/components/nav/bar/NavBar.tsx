import React from 'react';
import ThemeToggle from '@/components/toggle/ThemeToggle';
import NavBarDropdown from '@/components/nav/bar/NavBarDropdown';
import { SectionEnum } from '@/types';
import classNames from 'classnames';
import NavBarLink from '@/components/nav/bar/link';
import ParticleToggle from '@/components/toggle/ParticleToggle';
import { useLocale } from 'next-intl';
import LanguageToggle from '@/components/toggle/LanguageToggle';

export default function NavBar() {
  const locale = useLocale();
  const NavItems = () => (
    <>
      {Object.values(SectionEnum).map((section) => {
        return (
          <li key={`nav-link-${section}`}>
            <NavBarLink section={section} />
          </li>
        );
      })}
      <a
        className='btn btn-ghost btn-lg flex place-content-center text-center align-middle text-lg text-info md:btn-md lg:btn-sm'
        href={`docs/${locale}/resume.pdf`}
        target='_blank'
      >
        Resumé
      </a>
    </>
  );

  const NavRoot = ({ mobile = false }: { mobile?: boolean }) => {
    const classes = classNames('btn btn-ghost text-xl normal-case', {
      ['min-[965px]:hidden']: mobile,
      ['hidden min-[965px]:flex']: !mobile,
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
        <ul className='menu menu-horizontal hidden px-1 min-[965px]:flex'>
          <NavItems />
        </ul>
        <NavRoot mobile />
      </div>
      <div className='navbar-end space-x-2 min-[965px]:space-x-4'>
        <LanguageToggle lang={locale} />
        <ParticleToggle />
        <ThemeToggle />
      </div>
    </div>
  );
}
