import { IconType } from 'react-icons';

export type TimelineType = 'left' | 'right' | 'center';

export type TimelineSide = 'left' | 'right';

export type TimelineEventData = {
    company: string;
    position: string;
    dates: string;
    skills?: IconType[];
};
