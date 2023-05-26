import React, { useMemo, useState } from 'react';

import { Paper, Typography } from '@mui/material';
import classNames from 'classnames';

import useWindowSize from '../../hooks/use-window-size';
import DynamicIcon, { IconKey } from '../dynamic-icon';
import StyledText from '../text/styled-text';

import styles from './styles.module.scss';

type TimelineEventProps = {
    company: string;
    position: string;
    dates: string;
    skills?: IconKey[];
};

const FORCE_LEFT_WIDTH = 950;

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
                <Typography
                    variant='h4'
                    color='#0dcaf0'
                    marginBottom={0}
                    whiteSpace='nowrap'
                    textOverflow='ellipsis'
                >
                    {company}
                </Typography>
                <Typography variant='h5' color='white' whiteSpace='nowrap' textOverflow='ellipsis'>
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
    const { width } = useWindowSize();
    const sizeBoundPosition = width <= FORCE_LEFT_WIDTH ? 'left' : position;
    const [leftChildren, rightChildren] = useMemo(() => {
        const leftChildren = [];
        const rightChildren = [];

        const getComponent = (
            {
                company,
                position: companyPosition,
                dates,
                skills
            }: Omit<TimelineEventProps, 'onHover'>,
            index: number
        ) => {
            const key = `timeline-event-${company}-${index}`;
            return (
                <TimelineEvent
                    key={key}
                    company={company}
                    position={companyPosition}
                    dates={dates}
                    skills={skills}
                    index={index}
                />
            );
        };

        if (sizeBoundPosition === 'center') {
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
        } else if (sizeBoundPosition === 'right') {
            events.forEach((event, index) => {
                leftChildren.push(getComponent(event, index));
            });
        } else {
            events.forEach((event, index) => {
                rightChildren.push(getComponent(event, index));
            });
        }

        return [leftChildren, rightChildren];
    }, [events, sizeBoundPosition]);

    const timelineClasses = classNames(styles.TimelineContainer, {
        [styles.right]: sizeBoundPosition === 'right',
        [styles.center]: sizeBoundPosition === 'center'
    });
    return (
        <div className={timelineClasses}>
            {sizeBoundPosition != 'left' && (
                <div className={classNames(styles.TimelineEvents, styles.left)}>{leftChildren}</div>
            )}
            <div className={styles.Timeline}>
                <figure className={classNames(styles.TimelineEdge, styles.TimelineTop)} />
                <figure className={classNames(styles.TimelineEdge, styles.TimelineBottom)} />
            </div>
            {sizeBoundPosition != 'right' && (
                <div className={classNames(styles.TimelineEvents, styles.right)}>
                    {rightChildren}
                </div>
            )}
        </div>
    );
}

export default Timeline;
