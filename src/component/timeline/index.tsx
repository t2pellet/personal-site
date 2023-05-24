import React, { useMemo, useState } from 'react';

import { Paper, Typography } from '@mui/material';
import classNames from 'classnames';

import DynamicIcon, { IconKey } from '../dynamic-icon';
import StyledText from '../text/styled-text';

import styles from './styles.module.scss';

type TimelineEventProps = {
    company: string;
    position: string;
    dates: string;
    skills?: IconKey[];
    onHover?: () => void;
};

function TimelineEvent({
    company,
    position,
    dates,
    skills,
    onHover
}: TimelineEventProps): React.ReactElement {
    const [isHovered, setIsHovered] = useState(false);

    const onContentHovered = (hovered: boolean) => {
        if (hovered && onHover) onHover();
        setIsHovered(hovered);
    };

    const timelineClasses = classNames(styles.TimelineEvent, {
        [styles.hovered]: isHovered
    });

    return (
        <div className={timelineClasses}>
            <figure className={styles.TimelinePoint} />
            <figure className={styles.TimelineLine} />
            <Paper
                className={styles.TimelineContent}
                onMouseEnter={() => onContentHovered(true)}
                onMouseLeave={() => onContentHovered(false)}
            >
                <Typography variant='h4' color='#0dcaf0' marginBottom={0}>
                    {company}
                </Typography>
                <Typography variant='h5' color='white'>
                    {position}
                </Typography>
                <StyledText bold colour='text.secondary'>
                    {dates}
                </StyledText>
                <div className={styles.TimelineHiddenContent}>
                    <StyledText bold>Skills</StyledText>
                    <div className={styles.TimelineSkills}>
                        {skills?.map((skill, index) => (
                            <DynamicIcon key={`${company}-icon-${skill}-${index}`} type={skill} />
                        ))}
                    </div>
                </div>
            </Paper>
        </div>
    );
}

type TimelineProps = {
    events: Omit<TimelineEventProps, 'onHover'>[];
};
function Timeline({ events }: TimelineProps): React.ReactElement {
    const children = useMemo(
        () =>
            events.map(({ company, position, dates, skills }, index) => {
                const key = `timeline-event-${index}`;
                return (
                    <TimelineEvent
                        key={key}
                        company={company}
                        position={position}
                        dates={dates}
                        skills={skills}
                    />
                );
            }),
        [events]
    );

    return (
        <div className={styles.Timeline}>
            <figure className={classNames(styles.TimelineEdge, styles.TimelineTop)} />
            {children}
            <figure className={classNames(styles.TimelineEdge, styles.TimelineBottom)} />
        </div>
    );
}

export default Timeline;
