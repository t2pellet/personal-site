import React, { HTMLProps } from 'react';
import { TimelineEventProps } from './event';
import './timeline.css';
import classNames from 'classnames';

export type TimelineProps = HTMLProps<any> & {
  children: React.ReactElement<TimelineEventProps>[];
};

export default function Timeline({
  children,
  className,
  ...props
}: TimelineProps) {
  return (
    <div className={classNames('timeline relative', className)} {...props}>
      <div className='rounded-box absolute -left-1 -top-1 h-3 w-3 bg-primary lg:inset-x-0 lg:-left-0 lg:mx-auto' />
      <div className='rounded-box absolute h-full w-1 bg-primary lg:inset-x-0 lg:mx-auto' />
      <div className='rounded-box absolute -bottom-1 -left-1 h-3 w-3 bg-primary lg:inset-x-0 lg:-left-0 lg:mx-auto' />
      <div className='timeline-content flex w-full flex-col gap-8 py-8'>
        {children}
      </div>
    </div>
  );
}
