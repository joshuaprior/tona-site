import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../media/background.jpg';
import EventTree from './EventTree';

const AspectRatioBox = styled.section`
  position: relative;
  width: 100%;
  aspect-ratio: 2048 / 1474;
  background: url(${backgroundImage}) center/cover no-repeat;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.3);
  z-index: 2;
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding: 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const EventsList = styled.div`
  & > * + * {
    margin-top: 1rem;
  }
`;

const UpcomingEvents: React.FC = () => {
  return (
    <AspectRatioBox>
      <EventTree />
      <Overlay />
      <ContentContainer>
        <Title>Upcoming Events</Title>
        <EventsList>
          {/* Event content will go here */}
          <p>No upcoming events at the moment.</p>
        </EventsList>
      </ContentContainer>
    </AspectRatioBox>
  );
};

export default UpcomingEvents; 