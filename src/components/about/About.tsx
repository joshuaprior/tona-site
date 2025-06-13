import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tonaTreeImage from '../../media/tona-tree.PNG';
import BoardMember from './BoardMember';
import fetchPath from '../../util/fetchPath';
import { Card, CardTitle, CardText, CardBackground } from '../cards/Cards';
import { CardGrid } from '../cards/CardGrid';

interface BoardMember {
  image?: string;
  name: string;
  title: string;
}

const TwoColumnText = styled.div`
  column-count: 2;
  column-gap: 2rem;
  color: #4b5563;
  line-height: 1.6;
  position: relative;

  p {
    margin-top: 0;
    position: relative;
    z-index: 1; /* Ensure text is above the background image */
  }
`;

const CenteredImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 90%;
  max-width: 90%;
  object-fit: cover;
  opacity: 0.1;
`;

const LoadingText = styled.p`
  color: #6b7280;
  text-align: center;
  margin: 2rem 0;
`;

const ErrorText = styled.p`
  color: #dc2626;
  text-align: center;
  margin: 2rem 0;
`;

const About: React.FC = () => {
  const [boardMembers, setBoardMembers] = useState<BoardMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBoardMembers = async () => {
      try {
        const response = await fetch(fetchPath('/config/board/board.json'));
        if (!response.ok) {
          throw new Error('Failed to fetch board members');
        }
        const data = await response.json();
        setBoardMembers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBoardMembers();
  }, []);

  return (
    <>
      <Card>
        <CardTitle>Thousand Oaks Neighborhood Association, San Jose, CA</CardTitle>
        <TwoColumnText>
          <CenteredImage src={tonaTreeImage} alt="TONA Tree" />
          <p>Nestled in the heart of Silicon Valley, the Thousand Oaks neighborhood is one of the most beautiful and peaceful residential areas in San Jose. Conveniently located near shopping, freeway access, and schools, Thousand Oaks is neatly tucked-in in such a way that allows for neighbors to really interact with and get to know each other.</p>
          <p>The anchor point for the neighborhood is Thousand Oaks Park, which covers approximately 9.1 acres of land. This is where the community gathers for the popular Fourth Of July Parade and Picnic, Easter Egg Hunt, National Night Out, and other community events. This park is has a popular playground, nature area, walking paths and lawns for enjoying the outdoors. A new extension of Thousand Oaks Park located across the street is a beautiful Woodland Area with a walking path and benches to rest on.</p>
          <p>Terrell Park, which covers approximately 5.7 acres of land is adjacent to Terrell Elementary School which serves children from Kindergarten through Fifth Grade. Terrell has a picnic area with BBQs available for gatherings. The playground at Terrell Park is focused more towards our younger children and is a popular spot for the little ones.</p>
        </TwoColumnText>
      </Card>
      <CardBackground>
        <Card>
          <CardTitle>Board Members</CardTitle>

          <CardText>
            Our Neighborhood Association is dedicated to keeping the residents well informed about neighborhood activities/news, community events and July 4th parade through this website, our newsletter, and our private Facebook group.
          </CardText>
        </Card>

          {isLoading ? (
            <LoadingText>Loading board members...</LoadingText>
          ) : error ? (
            <ErrorText>{error}</ErrorText>
          ) : (
            <CardGrid>
              {boardMembers.map((member, index) => (
                <Card key={index}>
                  <BoardMember
                    image={fetchPath(`/config/board/${member.image}`)}
                    name={member.name}
                    title={member.title}
                  />
                </Card>
              ))}
            </CardGrid>
          )}
      </CardBackground>
    </>
  );
};

export default About; 