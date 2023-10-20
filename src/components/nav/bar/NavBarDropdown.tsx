'use client';

import React, { PropsWithChildren, useRef } from 'react';
import { IconMenu2 } from '@tabler/icons-react';

// Made this a client component 'cause it can't close on click otherwise
export default function NavBarDropdown({ children }: PropsWithChildren) {
  // Using ref instead of state for this because I don't want re-renders
  const isOpen = useRef<boolean>(false);
  // Ref to blur the toggle with
  const toggle = useRef<HTMLLabelElement>(null);

  return (
    <div className='dropdown static md:dropdown-hover'>
      <label
        tabIndex={0}
        className='btn btn-circle btn-ghost md:hidden'
        ref={toggle}
        id='navbar-toggle'
        onClickCapture={() => {
          if (isOpen.current) {
            toggle.current?.blur();
          }
          isOpen.current = !isOpen.current;
        }}
      >
        <IconMenu2 />
      </label>
      <ul
        tabIndex={0}
        className='menu dropdown-content menu-md absolute left-0 w-screen bg-base-100 shadow-sm'
      >
        {children}
      </ul>
    </div>
  );
}
