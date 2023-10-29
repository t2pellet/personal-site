import TimelineEvent, { RawTimelineEventProps } from './TimelineEvent';
import LabeledIcon, { LabeledIconProps } from '@/components/LabeledIcon';

export type TimelineJobProps = Omit<
  RawTimelineEventProps,
  'children' | 'baseHeight'
> & {
  title: string;
  role: string;
  date: string;
  description: string;
  skills: Omit<LabeledIconProps, 'labelType'>[];
};

export default function TimelineJob({
  title,
  role,
  date,
  description,
  skills,
  ...props
}: TimelineJobProps) {
  return (
    <TimelineEvent baseHeight='6rem' {...props}>
      <h3 className='text-3xl font-extrabold text-primary'>{title}</h3>
      <h2 className='text-2xl'>{role}</h2>
      <h1 className='mb-6 text-lg font-bold text-info'>{date}</h1>
      <p className='mb-6 text-center text-secondary'>{description}</p>
      <h1 className='text-center text-lg font-bold'>Skills</h1>
      <div className='flex flex-wrap place-content-center gap-2'>
        {skills.map((props) => (
          <LabeledIcon
            key={`job-${title}-skill-${props.name}`}
            className='h-16 w-16'
            labelType='tooltip'
            {...props}
          />
        ))}
      </div>
    </TimelineEvent>
  );
}
