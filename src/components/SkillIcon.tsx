import React, { HTMLProps } from 'react';
import { IconKey, Icons } from '@/types';
import { TablerIconsProps } from '@tabler/icons-react';
import classNames from 'classnames';

export type SkillIconProps = HTMLProps<any> & {
  icon: IconKey;
  name: string;
  labelType?: 'text' | 'tooltip';
};

export default function SkillIcon({
  icon,
  name,
  labelType = 'text',
  className,
  ...props
}: SkillIconProps) {
  const Icon: React.FC<TablerIconsProps> = Icons[icon];
  const classes = classNames(
    'flex h-24 w-24 cursor-pointer flex-col place-content-center transition-transform duration-200 ease-in-out hover:scale-125',
    {
      ['tooltip']: labelType === 'tooltip',
    },
    className
  );

  return (
    <div className={classes} {...props} data-tip={name}>
      <Icon className='mx-auto text-primary' size={48} />
      {labelType === 'text' && <span className='text-center'>{name}</span>}
    </div>
  );
}
