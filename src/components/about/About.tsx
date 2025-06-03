import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-top: 1.5rem;
  &:first-child {
    margin-top: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const SectionText = styled.p`
  color: #4b5563;
`;

const About: React.FC = () => {
  return (
    <Section>
      <SectionTitle>About TONA</SectionTitle>
      <SectionText>
        The Thousand Oaks Neighborhood Association (TONA) is dedicated to improving and maintaining
        the quality of life in our community. We work together to create a safe, vibrant, and
        welcoming neighborhood for all residents.
      </SectionText>
    </Section>
  );
};

export default About; 