import TimelineEvent, { RawTimelineEventProps } from './TimelineEvent';
import classNames from 'classnames';

export type TimelineSchoolProps = Omit<
  RawTimelineEventProps,
  'children' | 'baseHeight' | 'icon'
> & {
  title: string;
  major: string;
  date: string;
};

export default function TimelineSchool({
  title,
  major,
  date,
  ...props
}: TimelineSchoolProps) {
  return (
    <TimelineEvent {...props} icon='TbSchool'>
      <h3
        className={classNames(
          'truncate font-extrabold text-primary',
          title.length < 16 ? 'text-3xl' : 'text-[1.75rem]'
        )}
      >
        {title}
      </h3>
      <h2 className='truncate text-2xl'>{major}</h2>
      <h1 className='text-lg font-bold text-secondary'>{date}</h1>
    </TimelineEvent>
  );
}
