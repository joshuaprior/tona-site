import React, { ReactNode, useRef, useEffect, useState, Children } from 'react';
import styled from 'styled-components';
import backgroundImage from '../media/background.jpg';
import EventTree, { AnchorRefs } from './EventTree';

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

const CardContainer = styled.div<{ $top: number; $left: number }>`
  position: absolute;
  top: ${props => props.$top}px;
  left: ${props => props.$left}px;
  z-index: 4;
`;

interface UpcomingEventsProps {
  children?: ReactNode;
}

interface AnchorPosition {
  top: number;
  left: number;
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ children }) => {
  const containerRef = useRef<HTMLElement>(null);
  const anchorRefs: AnchorRefs = {
    anchor1: useRef<SVGCircleElement>(null),
    anchor2: useRef<SVGCircleElement>(null),
    anchor3: useRef<SVGCircleElement>(null),
    anchor4: useRef<SVGCircleElement>(null),
    anchor5: useRef<SVGCircleElement>(null),
    anchor6: useRef<SVGCircleElement>(null),
  };
  const [positions, setPositions] = useState<Record<keyof AnchorRefs, AnchorPosition>>({
    anchor1: { top: 0, left: 0 },
    anchor2: { top: 0, left: 0 },
    anchor3: { top: 0, left: 0 },
    anchor4: { top: 0, left: 0 },
    anchor5: { top: 0, left: 0 },
    anchor6: { top: 0, left: 0 },
  });

  useEffect(() => {
    const updatePositions = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const newPositions: Record<keyof AnchorRefs, AnchorPosition> = {
          anchor1: { top: 0, left: 0 },
          anchor2: { top: 0, left: 0 },
          anchor3: { top: 0, left: 0 },
          anchor4: { top: 0, left: 0 },
          anchor5: { top: 0, left: 0 },
          anchor6: { top: 0, left: 0 },
        };

        Object.entries(anchorRefs).forEach(([key, ref]) => {
          if (ref.current) {
            const anchorRect = ref.current.getBoundingClientRect();
            newPositions[key as keyof AnchorRefs] = {
              top: anchorRect.top - containerRect.top,
              left: anchorRect.left - containerRect.left,
            };
          }
        });

        setPositions(newPositions);
      }
    };

    updatePositions();
    window.addEventListener('resize', updatePositions);
    return () => window.removeEventListener('resize', updatePositions);
  }, []);

  const childArray = Children.toArray(children).slice(0, 6);

  return (
    <AspectRatioBox ref={containerRef}>
      <EventTree anchorRefs={anchorRefs} />
      <Overlay />
      <ContentContainer>
        <Title>Upcoming Events</Title>
        <EventsList>
          <p>No upcoming events at the moment.</p>
        </EventsList>
      </ContentContainer>
      <CardContainer $top={positions.anchor1.top} $left={positions.anchor1.left}>
        {childArray[0]}
      </CardContainer>
      <CardContainer $top={positions.anchor2.top} $left={positions.anchor2.left}>
        {childArray[1]}
      </CardContainer>
      <CardContainer $top={positions.anchor3.top} $left={positions.anchor3.left}>
        {childArray[2]}
      </CardContainer>
      <CardContainer $top={positions.anchor4.top} $left={positions.anchor4.left}>
        {childArray[3]}
      </CardContainer>
      <CardContainer $top={positions.anchor5.top} $left={positions.anchor5.left}>
        {childArray[4]}
      </CardContainer>
      <CardContainer $top={positions.anchor6.top} $left={positions.anchor6.left}>
        {childArray[5]}
      </CardContainer>
    </AspectRatioBox>
  );
};

export default UpcomingEvents; 