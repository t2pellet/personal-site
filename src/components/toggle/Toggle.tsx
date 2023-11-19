import React, { useState } from 'react';
import classNames from 'classnames';
import { IconKey, Icons } from '@/types';

export type ToggleProps = {
  checked: boolean;
  onToggle: (checked: boolean) => void;
  iconOn: IconKey;
  iconOff: IconKey;
};

export default function ParticleToggle({
  checked,
  onToggle,
  iconOn,
  iconOff,
}: ToggleProps) {
  const [isChecked, setIsChecked] = useState(checked);
  const IconOn = Icons[iconOn];
  const IconOff = Icons[iconOff];

  const fullClasses = (className: string, on: boolean) => {
    return classNames(className, 'pointer-events-none absolute top-1', {
      ['hidden']: on ? checked : !checked,
    });
  };

  return (
    <div className='relative flex h-fit'>
      <input
        type='checkbox'
        className='toggle'
        onChange={() => {
          setIsChecked(!isChecked);
          onToggle(!isChecked);
        }}
        checked={isChecked}
      />
      <IconOn size={16} className={fullClasses('left-1.5', false)} />
      <IconOff size={16} className={fullClasses('right-1.5', true)} />
    </div>
  );
}
