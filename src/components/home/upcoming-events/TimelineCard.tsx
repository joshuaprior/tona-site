import React from 'react';
import styled from 'styled-components';
import { TimelineEventData } from './logic';
import fetchPath from '../../../util/fetchPath';

const TimelineEventContent = styled.div`
  background: white;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 36px;
  position: relative;
  z-index: 2;
  min-width: 150px; /* Adjust as needed */
  left: 50%;
  transform: translateX(-50%);
  text-align: left;
  font-size: 0.9em;
`;

const EventImage = styled.img`
  width: 100%;
  max-height: 100px; /* Adjust as needed */
  object-fit: cover;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const EventTitle = styled.h4`
  font-weight: bold;
  margin: 0 0 5px 0; /* Adjust spacing as needed */
`;

const TimelineItemLayout = styled.li`
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
`;

export const TimelineTime = styled.div`
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  border-radius: 5px;
`;

interface TimelineCardComponentProps {
  event: TimelineEventData;
}

const TimelineCard: React.FC<TimelineCardComponentProps> = ({ event }) => {
  return (
    <TimelineItemLayout>
      <TimelineTime>
        {new Date(event.start).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }).toUpperCase()}
      </TimelineTime>
      <TimelineEventContent>
        <EventTitle>{event.title}</EventTitle>
        {event.image && (
          <EventImage src={fetchPath(`/config/events/${event.image}`)} alt={event.title || 'Event image'} />
        )}
        <div>{event.description}</div>
      </TimelineEventContent>
    </TimelineItemLayout>
  );
};

export default TimelineCard;