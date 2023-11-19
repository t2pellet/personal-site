'use client';

import React, { useLayoutEffect, useState } from 'react';
import { TbStars, TbStarsOff } from 'react-icons/tb';
import classNames from 'classnames';
import useLocalStorage from 'use-local-storage';

export default function ParticleToggle() {
  const [particles, setParticles] = useLocalStorage<boolean>('particles', true);
  const [loaded, setLoaded] = useState(false);

  useLayoutEffect(() => setLoaded(true), []);

  const fullClasses = (className: string, on: boolean) => {
    return classNames(className, 'pointer-events-none absolute top-1', {
      ['hidden']: on ? !loaded || particles : loaded && !particles,
    });
  };

  return (
    <div className='relative flex h-fit'>
      <input
        type='checkbox'
        className='toggle'
        onChange={() => setParticles(!particles)}
        checked={!loaded || particles}
      />
      <TbStarsOff size={16} className={fullClasses('left-1.5', false)} />
      <TbStars size={16} className={fullClasses('right-1.5', true)} />
    </div>
  );
}
