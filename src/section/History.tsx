import React from 'react';
import Timeline, { TimelineEvent } from '../component/Timeline';
import Section from '../component/Section';

export default function History() {
    return (
        <Section id='History'>
            <Timeline>
                <TimelineEvent
                    company='Lifion by ADP'
                    position='Software Engineer'
                    dates='May 2022 - Aug 2022'
                />
                <TimelineEvent
                    company='Bunch.live'
                    position='Game Developer'
                    dates='Sept 2021 - Dec 2021'
                />
                <TimelineEvent
                    company='Paramount Commerce'
                    position='Java Developer'
                    dates='Jan 2021 - April 2021'
                />
                <TimelineEvent
                    company='MikeCrack'
                    position='Freelance Mod Developer'
                    dates='June 2020 - Sept 2020'
                />
            </Timeline>
        </Section>
    );
}
