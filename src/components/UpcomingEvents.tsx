import React, { ReactNode, useRef, useEffect, useState } from 'react';
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

const CardsContainer = styled.div<{ $top: number; $left: number }>`
  position: absolute;
  top: ${props => props.$top}px;
  left: ${props => props.$left}px;
  z-index: 4;
`;

interface UpcomingEventsProps {
  children?: ReactNode;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ children }) => {
  const anchorRef = useRef<SVGCircleElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (anchorRef.current && containerRef.current) {
        const anchorRect = anchorRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        
        setPosition({
          top: anchorRect.top - containerRect.top,
          left: anchorRect.left - containerRect.left,
        });
      }
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    return () => window.removeEventListener('resize', updatePosition);
  }, []);

  return (
    <AspectRatioBox ref={containerRef}>
      <EventTree ref={anchorRef} />
      <Overlay />
      <ContentContainer>
        <Title>Upcoming Events</Title>
        <EventsList>
          <p>No upcoming events at the moment.</p>
        </EventsList>
      </ContentContainer>
      <CardsContainer $top={position.top} $left={position.left}>
        {children}
      </CardsContainer>
    </AspectRatioBox>
  );
};

export default UpcomingEvents; 