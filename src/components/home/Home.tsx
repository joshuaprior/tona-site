import React from 'react';
import styled from 'styled-components';
import UpcomingEvents from '../UpcomingEvents';
import EventCard from '../EventCard';

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

const List = styled.ul`
  margin-top: 1rem;
  list-style: none;
  padding: 0;
  space-y: 0.5rem;
`;

const ListItem = styled.li`
  color: #4b5563;
`;

const Home: React.FC = () => {
  return (
    <>
      <UpcomingEvents>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </UpcomingEvents>
      <Section>
        <SectionTitle>Committees</SectionTitle>
        <SectionText>Committies help support and grow our community.</SectionText>
        <SectionText>{'<Grab some content from the TONA Community Events Team Needs you! on the Committees page>'}</SectionText>
        <SectionText>{'<Grab some content from the More -> Get Involved page>'}</SectionText>
        <SectionText>{'<Committees represented as the root system of the tree>'}</SectionText>
      </Section>
      <Section>
        <SectionTitle>Community Tasks</SectionTitle>
        <SectionText>Get involved with low commitment tasks:</SectionText>
        {'<List of small jobs that TONA needs help with: pulling weeds, getting plates or cups for events, etc.>'}
      </Section>
    </>
  );
};

export default Home; 