import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import heroVideo from '../../media/branch.mp4'; // Import the video

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  max-height: 50rem;
  overflow: hidden; /* Ensures video doesn't spill out as it slides down during scrolling. */
`;

const VideoElement = styled.video`
  display: block;
  width: 100%;
  object-fit: cover;
  position: relative;
`;

const OverlaySVG = styled.svg`
  position: absolute;
  bottom: var(--nav-header-height);
  left: 0;
  width: 100%;
  max-height: 35rem;
  z-index: 2;
`;

interface OverlayPathProps {
  scale: number;
}


const OverlayPath = styled.path<OverlayPathProps>`
  fill: rgb( from var(--shell-background) r g b / 1);
  ${({ scale }) => scale === 100 ? '' : `
    transform-origin: bottom;
    transform: scale(1, ${scale / 100});
    fill: rgb( from var(--shell-background) r g b / calc(alpha + (1 - alpha) * ${scale / 100}));
  `}
`;

interface HeroProps {
  onViewChange?: (isInView: boolean) => void;
  headerCollapse?: number; // Add new prop for header collapse percentage
}

const Hero: React.FC<HeroProps> = ({ onViewChange, headerCollapse }) => {
  const videoOffset = window.scrollY * 0.5;
  const svgScale = 100 - (headerCollapse || 0);
  
  return (
    <HeroContainer>
      <VideoElement autoPlay loop muted playsInline style={{ transform: `translateY(${videoOffset}px)` }}> {/* Current: video moves DOWN with scroll */}
        <source src={heroVideo} type="video/mp4" /> 
        Your browser does not support the video tag.
      </VideoElement>
      <OverlaySVG viewBox="0 0 160 90" preserveAspectRatio="none" scale={100}>
        <OverlayPath d="M 0 82 C 13 92 52 92 70 82 C 103 65 104 54 133 50 C 147 48 154 52 160 54 V 90 H 0 V 85" scale={svgScale} />
      </OverlaySVG>
    </HeroContainer>
  );
};
export default Hero;