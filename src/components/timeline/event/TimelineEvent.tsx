import React, { PropsWithChildren } from 'react';
import { IconKey, Icons } from '@/types';
import styles from '../styles.module.css';
import classNames from 'classnames';

export type RawTimelineEventProps = PropsWithChildren<{
  icon: IconKey;
  baseHeight?: string; // must be valid tailwind height
}>;

export default function TimelineEvent({
  children,
  icon,
  baseHeight,
  ...props
}: RawTimelineEventProps) {
  const Icon: React.FC<{ size: number }> = Icons[icon];

  return (
    <div
      className={classNames(
        'rounded-box relative h-fit w-64 md:w-80 lg:w-96',
        styles.timelineEvent
      )}
      {...props}
    >
      <div
        className={classNames(
          styles.timelineEventPoint,
          'absolute w-fit rounded-full border-2 border-primary bg-base-100 p-2 text-primary'
        )}
      >
        {<Icon size={32} />}
      </div>
      <div
        className={classNames(
          styles.timelineEventArrow,
          'absolute top-4 h-0 w-0 border-y-[10px] border-x-secondary-content border-y-transparent'
        )}
      />
      <div className='rounded-box relative h-fit w-full bg-base-200 p-4 dark:bg-opacity-40 md:p-8'>
        <div
          className={classNames(
            styles.timelineEventBody,
            'overflow-hidden transition-all'
          )}
          style={
            baseHeight
              ? {
                  maxHeight: baseHeight,
                }
              : undefined
          }
        >
          {children}
        </div>
      </div>
    </div>
  );
}
