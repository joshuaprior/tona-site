import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: red;
  z-index: 4;
  opacity: 0.1;
`;

const EventCard: React.FC = () => {
  return <Card />;
};

export default EventCard; 