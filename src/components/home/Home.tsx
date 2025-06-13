import React from 'react';
import UpcomingEvents from './upcoming-events/UpcomingEvents';
import EventCard from './upcoming-events/EventCard';
import { Card, CardTitle, CardText, CardBackground } from '../cards/Cards';
import { CardGrid } from '../cards/CardGrid';

const Home: React.FC = () => {
  return (
    <>
      {/*
      <UpcomingEvents>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </UpcomingEvents>
      */}
      <CardBackground>
        <Card>
          <CardTitle>Upcoming Events</CardTitle>
        </Card>
        <CardGrid>
          <Card>
            
          </Card>
          <Card>
            
          </Card>
          <Card>
            
          </Card>
        </CardGrid>
      </CardBackground>
      <CardBackground>
        <Card>
          <CardTitle>Committees</CardTitle>
          <CardText>Committies help support and grow our community.</CardText>
        </Card>
        <CardGrid>
          <Card>
            <CardText>{'<Grab some content from the TONA Community Events Team Needs you! on the Committees page>'}</CardText>
          </Card>
          <Card>
            <CardText>{'<Grab some content from the More -> Get Involved page>'}</CardText>
          </Card>
          <Card>
            <CardText>{'<Committees represented as the root system of the tree>'}</CardText>
          </Card>
        </CardGrid>
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