import TimelineJob, { TimelineJobProps } from './TimelineJob';
import TimelineSchool, { TimelineSchoolProps } from './TimelineSchool';
import TimelineEvent, { RawTimelineEventProps } from './TimelineEvent';

export type TimelineEventProps =
  | RawTimelineEventProps
  | TimelineSchoolProps
  | TimelineJobProps;
export { TimelineJob, TimelineSchool, TimelineEvent };
