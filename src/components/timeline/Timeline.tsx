import { PropsWithChildren } from 'react';

function TimelineEvent({ children }: PropsWithChildren) {
  return <div className='timelineEvent'></div>;
}

export default function Timeline({ children }: PropsWithChildren) {
  return (
    <div className='timeline relative'>
      <div className='absolute h-full w-0.5 bg-primary' />
      {children}
    </div>
  );
}
