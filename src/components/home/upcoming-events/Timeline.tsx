import React from 'react';
import styled from 'styled-components';
import { Card, CardTitle } from '../../cards/Cards';

const TimelineContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 50px auto;
  overflow-x: auto; /* Enable horizontal scrolling for smaller screens */
  padding-bottom: 40px; /* Add some padding at the bottom for the last event */
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
    top: 36px; /* Adjusted to position between Time and Event */
    left: 0;
    right: 0;
    height: 4px;
    background: red; /* The red timeline line */
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
    top: 24px; /* Position at the bottom of TimelineTime (20px padding + 13px half height of TimelineTime) */
    left: 50%;
    transform: translateX(-50%);
    width: 4px; /* Vertical line thickness */
    height: 24px; /* Distance from bottom of TimelineTime (33px) to bottom of TimelineEvent margin (80px)*/
    background-color: red; /* Vertical line color */
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
  return (
    <Card>
      <CardTitle>Upcoming Events</CardTitle>
      <TimelineContainer>
        <TimelineList>
            <TimelineItem>
                <TimelineTime>MAY '16</TimelineTime>
                <TimelineEvent>General Conference at Oregon Convention Center</TimelineEvent>
            </TimelineItem>
            <TimelineItem>
                <TimelineTime>OCT '16</TimelineTime>
                <TimelineEvent>
                    Members named, <br/>
                    32 United Methodists, <br/>
                    8 Bishops, 11 laity, 11 elders, <br/>
                    2 deacons
                </TimelineEvent>
            </TimelineItem>
            <TimelineItem>
                <TimelineTime>JAN '17</TimelineTime>
                <TimelineEvent>Praying Our Way Forward Phase 2 begins</TimelineEvent>
            </TimelineItem>
            <TimelineItem>
                <TimelineTime>NOV '17</TimelineTime>
                <TimelineEvent>
                    Report to Bishops:<br/>
                    Bishops review three possible models from Commission, Lake Junaluska
                </TimelineEvent>
            </TimelineItem>
        </TimelineList>
    </TimelineContainer>
    </Card>
  );
};

export default Timeline;