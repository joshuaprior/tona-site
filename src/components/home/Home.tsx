import React from 'react';
import UpcomingEvents from './upcoming-events/UpcomingEvents';
import EventCard from './upcoming-events/EventCard';
import { Card, CardTitle, CardText, CardBackground } from '../cards/Cards';

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
      <CardBackground>
        <Card>
          <CardTitle>Committees</CardTitle>
          <CardText>Committies help support and grow our community.</CardText>
        </Card>
        <CardText>{'<Grab some content from the TONA Community Events Team Needs you! on the Committees page>'}</CardText>
        <CardText>{'<Grab some content from the More -> Get Involved page>'}</CardText>
        <CardText>{'<Committees represented as the root system of the tree>'}</CardText>
      </CardBackground>
      <Card>
        <CardTitle>Community Tasks</CardTitle>
        <CardText>Get involved with low commitment tasks:</CardText>
        {'<List of small jobs that TONA needs help with: pulling weeds, getting plates or cups for events, etc.>'}
      </Card>
    </>
  );
};

export default Home; 