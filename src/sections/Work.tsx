import React from 'react';
import PageSection from '@/components/PageSection';
import { SectionEnum } from '@/types';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Timeline from '@/components/timeline/Timeline';

export default function Work() {
  return (
    <PageSection section={SectionEnum.WORK}>
      <Timeline>
        <div>
          <h3>Test</h3>
        </div>
        <div>
          <h3>Other</h3>
        </div>
      </Timeline>
    </PageSection>
  );
}
