import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card, CardTitle } from '../../cards/Cards';
import { fetchTimelineEvents, TimelineEventData } from './logic';
import { TimelineItem, TimelineTime, TimelineEvent } from './TimelineCard';

const TimelineContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 50px auto;
  overflow-x: auto; /* Enable horizontal scrolling for smaller screens */
  padding-bottom: 40px; /* Add some padding at the bottom for the last event */
  --timeline-color: red; /* Define the custom property */
`;

const TimelineList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;

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
    <Card>
      <CardTitle>Upcoming Events</CardTitle>
      <TimelineContainer>
        {error && <p>{error}</p>}
        <TimelineList>
          {events.map((event, index) => (
            <TimelineItem key={index}>
              <TimelineTime>{new Date(event.start).toLocaleDateString('en-US', { month: 'short', year: '2-digit' }).toUpperCase()}</TimelineTime>
              <TimelineEvent>
                {event.description}
              </TimelineEvent>
            </TimelineItem>
          ))}
        </TimelineList>
    </TimelineContainer>
    </Card>
  );
};

export default Timeline;