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
};

function TimelineGap() {
    return <div className={styles.TimelineGap} />;
}

function TimelineEvent({
    company,
    position,
    dates,
    skills
}: TimelineEventProps): React.ReactElement {
    const [isHovered, setIsHovered] = useState(false);

    const onContentHovered = (hovered: boolean) => {
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
    type?: 'right' | 'left' | 'mixed';
    position?: 'left' | 'right' | 'center';
};
function Timeline({ events, position = 'left' }: TimelineProps): React.ReactElement {
    const [leftChildren, rightChildren] = useMemo(() => {
        const leftChildren = [];
        const rightChildren = [];

        const getComponent = (
            { company, position, dates, skills }: Omit<TimelineEventProps, 'onHover'>,
            index: number
        ) => {
            const key = `timeline-event-${company}-${index}`;
            return (
                <TimelineEvent
                    key={key}
                    company={company}
                    position={position}
                    dates={dates}
                    skills={skills}
                    index={index}
                />
            );
        };

        if (position === 'center') {
            events.forEach((event, index) => {
                const isLeft = index % 2 == 0;
                const component = getComponent(event, index);
                if (isLeft) {
                    leftChildren.push(component);
                    rightChildren.push(<TimelineGap />);
                } else {
                    rightChildren.push(component);
                    leftChildren.push(<TimelineGap />);
                }
            });
        } else if (position === 'right') {
            events.forEach((event, index) => {
                leftChildren.push(getComponent(event, index));
            });
        } else {
            events.forEach((event, index) => {
                rightChildren.push(getComponent(event, index));
            });
        }

        return [leftChildren, rightChildren];
    }, [events, position]);

    const timelineClasses = classNames(styles.TimelineContainer, {
        [styles.right]: position === 'right',
        [styles.center]: position === 'center'
    });
    return (
        <div className={timelineClasses}>
            {position != 'left' && (
                <div className={classNames(styles.TimelineEvents, styles.left)}>{leftChildren}</div>
            )}
            <div className={styles.Timeline}>
                <figure className={classNames(styles.TimelineEdge, styles.TimelineTop)} />
                <figure className={classNames(styles.TimelineEdge, styles.TimelineBottom)} />
            </div>
            {position != 'right' && (
                <div className={classNames(styles.TimelineEvents, styles.right)}>
                    {rightChildren}
                </div>
            )}
        </div>
    );
}

export default Timeline;
