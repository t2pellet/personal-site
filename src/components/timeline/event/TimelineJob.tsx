import TimelineEvent, { RawTimelineEventProps } from './TimelineEvent';
import LabeledIcon, { LabeledIconProps } from '@/components/LabeledIcon';
import classNames from 'classnames';

export type TimelineJobProps = Omit<
  RawTimelineEventProps,
  'children' | 'baseHeight' | 'icon'
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
    <TimelineEvent baseHeight='6rem' {...props} icon='TbBriefcase'>
      <h3
        className={classNames(
          'truncate font-extrabold text-primary',
          title.length < 16 ? 'text-3xl' : 'text-[1.75rem]'
        )}
      >
        {title}
      </h3>
      <h2 className='truncate text-2xl'>{role}</h2>
      <h1 className='mb-6 text-lg font-bold text-info'>{date}</h1>
      <p className='mb-6 text-center text-secondary'>{description}</p>
      <h1 className='mb-2 text-center text-lg font-bold'>Skills</h1>
      <div className='mx-auto flex max-w-[90%] flex-wrap place-content-center gap-x-2 gap-y-1'>
        {skills.map((props) => (
          <LabeledIcon
            key={`job-${title}-skill-${props.name}`}
            labelType='tooltip'
            {...props}
          />
        ))}
      </div>
    </TimelineEvent>
  );
}
