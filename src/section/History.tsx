import React from 'react';

import Section from '../component/section';
import Timeline, { TimelineEvent } from '../component/timeline';

export default function History(): React.ReactElement {
    return (
        <Section id='History' heading='Work Experience'>
            <Timeline>
                <TimelineEvent
                    company='Vivid Seats'
                    position='Software Engineer'
                    dates='Jan 2023 - Aug 2023'
                />
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
