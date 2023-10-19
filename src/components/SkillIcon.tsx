import React from 'react';
import { IconKey, Icons } from '@/types';
import { TablerIconsProps } from '@tabler/icons-react';

export type SkillIconProps = {
  icon: IconKey;
  name: string;
};

export default function SkillIcon({ icon, name }: SkillIconProps) {
  const Icon: React.FC<TablerIconsProps> = Icons[icon];

  return (
    <div className='flex h-24 w-24 cursor-pointer flex-col place-content-center transition-transform duration-200 ease-in-out hover:scale-125'>
      <Icon className='mx-auto text-primary' size={48} />
      <span className='text-center'>{name}</span>
    </div>
  );
}
