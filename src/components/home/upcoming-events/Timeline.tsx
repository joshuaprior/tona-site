import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card, CardTitle } from '../../cards/Cards';
import { fetchTimelineEvents, TimelineEventData } from './logic';
import TimelineCard from './TimelineCard';

const TimelineContainer = styled.div`
  margin: 0px 20px;
  overflow-x: auto; /* Enable horizontal scrolling for smaller screens */
  --timeline-color: rgb(145 94 43);
`;

const TimelineList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  gap: 20px; /* Add gap between timeline cards */

  &::before {
    content: '';
    position: absolute;
    top: 2.25rem; /* 36px / 16px = 2.25rem */
    left: 0;
    right: 0;
    height: 0.25rem; /* 4px / 16px = 0.25rem */
    background: var(--timeline-color); /* Use the custom property */
    transform: translateY(-50%);
    z-index: 1;
  }
`;

const Timeline: React.FC = () => {
  const [events, setEvents] = useState<TimelineEventData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const fetchedEvents = await fetchTimelineEvents();
        setEvents(fetchedEvents);
      } catch (err) {
        setError("Failed to load events.");
        console.error(err);
      }
    };

    loadEvents();
  }, []);

  return (
    <Card tint="green">
      <CardTitle>Upcoming Events</CardTitle>
      <TimelineContainer>
        {error && <p>{error}</p>}
        <TimelineList>
          {events.map((event, index) => (
            <TimelineCard key={index} event={event} />
          ))}
        </TimelineList>
    </TimelineContainer>
    </Card>
  );
};

export default Timeline;