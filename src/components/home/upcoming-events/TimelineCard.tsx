import styled from 'styled-components';

export const TimelineEvent = styled.div`
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

export interface TimelineItemProps {
  isFall18?: boolean;
}

export const TimelineItem = styled.li<TimelineItemProps>`
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

export const TimelineTime = styled.div`
  font-weight: bold;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  border-radius: 5px;
`;

// Note: This file currently only exports styled-components and an interface.
// It does not define a React component named TimelineCard.
// If a React component is intended, it would need to be defined here.