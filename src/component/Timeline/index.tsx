import React from 'react';
import { Typography } from '@mui/material';
import StyledText from '../../text/StyledText';
import './style.css';

type TimelineEventProps = {
    company: string;
    position: string;
    dates: string;
};
export function TimelineEvent(props: TimelineEventProps) {
    const { company, position, dates } = props;
    return (
        <div className='TimelineEvent'>
            <figure className='TimelinePoint' />
            <Typography variant='h4'>{company}</Typography>
            <Typography variant='h5'>{position}</Typography>
            <StyledText bold colour='text.secondary'>
                {dates}
            </StyledText>
        </div>
    );
}

type TimelineProps = {
    children?: React.ReactElement<TimelineEventProps> | React.ReactElement<TimelineEventProps>[];
};
const defaultProps: TimelineProps = {
    children: undefined
};
function Index(props: TimelineProps) {
    const { children } = props;
    return (
        <div className='Timeline'>
            <figure className='TimelineEdge TimelineTop' />
            {children}
            <figure className='TimelineEdge TimelineBottom' />
        </div>
    );
}
Index.defaultProps = defaultProps;

export default Index;
