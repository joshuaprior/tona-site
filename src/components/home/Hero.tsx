import React, { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';
import heroVideo from '../../media/branch.mp4'; // Import the video

const HeroContainer = styled.div`
  width: 100%;
  height: 100%; /* Take full height of parent (Header) */
  background-color: #e0e0e0; /* Placeholder background color */
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  color: #333;
  overflow: hidden; /* Ensures video doesn't spill out if aspect ratio differs */
  /* border-radius: 0.5rem; */ /* Optional: if you want rounded corners */
  /* margin-bottom: 1.5rem; */ /* Optional: space below the hero */
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures the video covers the container, cropping if necessary */
  position: relative; /* Allows the video to be moved within the container */
  /* Transition for smoother movement - optional */
  /* transition: transform 0.1s ease-out; */
`;

interface OverlaySVGProps {
  scale: number;
}

const OverlaySVG = styled.svg<OverlaySVGProps>`
  position: absolute;
  bottom: 3.9375rem; /* 63px @ 16px/rem */
  left: 0;
  width: 100%;
  height: auto; /* Maintain aspect ratio */
  z-index: 2; /* Ensure it's above the video and potentially other overlays */
  transform-origin: bottom; /* Ensures scaling happens from the bottom */
  transform: scale(1, ${({ scale }) => scale / 100}); /* Apply vertical scale */
`;

const BottomFill = styled.div`
  flex: 0 0 4rem;
  width: 100%;
  height: 4rem;
  background-color: #2b4a2d;
  z-index: 1;
`;

interface HeroProps {
  onViewChange?: (isInView: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ onViewChange }) => {
  const [videoOffset, setVideoOffset] = useState(0);
  const [svgScale, setSvgScale] = useState(100); // Initial scale 0%
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const heroContainerHeightRef = useRef<number>(0); // To store HeroContainer's height

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const heroHeight = heroContainerHeightRef.current;

    // Video offset logic
    const videoScrollFactor = 0.5;
    setVideoOffset(scrollY * videoScrollFactor);

    // SVG scale logic
    if (heroHeight > 0) {
      const scrollPercentage = (scrollY / heroHeight) * 100;
      const newScale = 100 - Math.max(0, Math.min(100, scrollPercentage));
      setSvgScale(newScale);
    } else {
      setSvgScale(0);
    }

    // Call onViewChange if provided
    if (onViewChange) {
      onViewChange(scrollY <= heroHeight - 64);
    }
  }, [onViewChange, setVideoOffset, setSvgScale]);

  useEffect(() => {
    const calculateAndSetInitialSizing = () => {
      if (heroContainerRef.current) {
        heroContainerHeightRef.current = heroContainerRef.current.offsetHeight;
        // Call handleScroll to set initial scale based on current scroll position
        handleScroll();
      }
    };
    calculateAndSetInitialSizing(); // Set height and initial scroll position effects

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <HeroContainer ref={heroContainerRef}>
      <VideoElement autoPlay loop muted playsInline style={{ transform: `translateY(${videoOffset}px)` }}> {/* Current: video moves DOWN with scroll */}
        <source src={heroVideo} type="video/mp4" /> 
        Your browser does not support the video tag.
      </VideoElement>
      <BottomFill />
      <OverlaySVG viewBox="0 0 160 90" scale={svgScale}>
        <path fill="#2b4a2d" d="M 0 82 C 13 92 52 92 70 82 C 103 65 104 54 133 50 C 147 48 154 52 160 54 V 90 H 0 V 85"></path>
      </OverlaySVG>
    </HeroContainer>
  );
};
export default Hero;