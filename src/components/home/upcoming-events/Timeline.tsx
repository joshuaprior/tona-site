import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Card, CardTitle } from '../../cards/Cards';
import { fetchTimelineEvents, TimelineEventData } from './logic';

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

const TimelineEvent = styled.div`
  background: white;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 36px;
  position: relative;
  z-index: 2;
  width: 150px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  text-align: left;
  font-size: 0.9em;
`;

interface TimelineItemProps {
  isFall18?: boolean;
}

const TimelineItem = styled.li<TimelineItemProps>`
  flex: 1;
  position: relative;
  padding: 20px 0;
  text-align: center;

  &::before {
    content: ''; /* Required for pseudo-elements */
    position: absolute;
    top: 1.5rem; /* 24px / 16px = 1.5rem */
    left: 50%;
    transform: translateX(-50%);
    width: 0.25rem; /* 4px / 16px = 0.25rem */
    height: 1.5rem; /* 24px / 16px = 1.5rem */
    background-color: var(--timeline-color); /* Use the custom property */
    /* No border or border-radius needed for a line */
    z-index: 2; /* Same z-index as TimelineEvent to ensure the line is behind the content */
    /* No need for border-radius as it's a straight line */
  }

  /* Style for the FALL '18 multi-part event */
  ${(props) =>
    props.isFall18 &&
    `
    padding-bottom: 80px; /* Adjust to accommodate both descriptions */

    ${TimelineEvent} {
      margin-top: 60px; /* Adjust spacing */
    }

    ${TimelineEvent} + ${TimelineEvent} { /* Style the second event */
      margin-top: 80px;
    }
  `}
`;

const TimelineTime = styled.div`
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  border-radius: 5px;
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