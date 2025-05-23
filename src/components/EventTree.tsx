//<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import EventTreeImage from './EventTreeImage';

const TreeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const TreeImage = styled.svg`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export interface AnchorRefs {
  anchor1: React.RefObject<SVGCircleElement>;
  anchor2: React.RefObject<SVGCircleElement>;
  anchor3: React.RefObject<SVGCircleElement>;
  anchor4: React.RefObject<SVGCircleElement>;
  anchor5: React.RefObject<SVGCircleElement>;
  anchor6: React.RefObject<SVGCircleElement>;
}

interface EventTreeProps {
  anchorRefs: AnchorRefs;
}

const EventTree: React.FC<EventTreeProps> = ({ anchorRefs }) => {
  return (
    <TreeContainer>
      <TreeImage
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100%"
        viewBox="0 0 2048 1474"
        enable-background="new 0 0 2048 1474"
      >
        <EventTreeImage />
        <circle ref={anchorRefs.anchor1} id="anchor-1" cx="240" cy="986" r="10" fill="white" opacity="100"/>
        <circle ref={anchorRefs.anchor2} id="anchor-2" cx="540" cy="986" r="10" fill="white" opacity="100"/>
        <circle ref={anchorRefs.anchor3} id="anchor-3" cx="840" cy="986" r="10" fill="white" opacity="100"/>
        <circle ref={anchorRefs.anchor4} id="anchor-4" cx="1140" cy="986" r="10" fill="white" opacity="100"/>
        <circle ref={anchorRefs.anchor5} id="anchor-5" cx="1440" cy="986" r="10" fill="white" opacity="100"/>
        <circle ref={anchorRefs.anchor6} id="anchor-6" cx="1740" cy="986" r="10" fill="white" opacity="100"/>
      </TreeImage>
    </TreeContainer>
  );
};

export default EventTree;