import TimelineEvent, { RawTimelineEventProps } from './TimelineEvent';
import SkillIcon, { SkillIconProps } from '@/components/SkillIcon';

export type TimelineSchoolProps = Omit<
  RawTimelineEventProps,
  'children' | 'baseHeight'
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
    <TimelineEvent {...props}>
      <h3 className='text-3xl font-extrabold text-primary'>{title}</h3>
      <h2 className='text-2xl'>{major}</h2>
      <h1 className='text-lg font-bold text-info'>{date}</h1>
    </TimelineEvent>
  );
}
