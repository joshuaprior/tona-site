import React from 'react';
import styled from 'styled-components';
import tonaTreeImage from '../../media/tona-tree.PNG';

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

const SectionText = styled.div`
  color: #4b5563;
`;

const TwoColumnText = styled.div`
  column-count: 2;
  column-gap: 2rem;
  color: #4b5563;
  line-height: 1.6;
  position: relative;

  p:first-child {
    margin-top: 0;
  }
`;

const CenteredImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 308px;
  height: auto;
  shape-outside: url(${tonaTreeImage});
  shape-image-threshold: 0.5;
  shape-margin: 1rem;
`;

const Divider = styled.hr`
  border: 0;
  height: 1px;
  background-color: #e5e7eb;
  margin: 2rem 0;
`;

const About: React.FC = () => {
  return (
    <Section>
      <SectionTitle>Thousand Oaks Neighborhood Association, San Jose, CA</SectionTitle>
      <TwoColumnText>
        <p>Nestled in the heart of Silicon Valley, the Thousand Oaks neighborhood is one of the most beautiful and peaceful residential areas in San Jose. Conveniently located near shopping, freeway access, and schools, Thousand Oaks is neatly tucked-in in such a way that allows for neighbors to really interact with and get to know each other.</p>
        <p>The anchor point for the neighborhood is Thousand Oaks Park, which covers approximately 9.1 acres of land. This is where the community gathers for the popular Fourth Of July Parade and Picnic, Easter Egg Hunt, National Night Out, and other community events. This park is has a popular playground, nature area, walking paths and lawns for enjoying the outdoors. A new extension of Thousand Oaks Park located across the street is a beautiful Woodland Area with a walking path and benches to rest on.</p>
        <p>Terrell Park, which covers approximately 5.7 acres of land is adjacent to Terrell Elementary School which serves children from Kindergarten through Fifth Grade. Terrell has a picnic area with BBQs available for gatherings. The playground at Terrell Park is focused more towards our younger children and is a popular spot for the little ones.</p>
        <CenteredImage src={tonaTreeImage} alt="TONA Tree" />
      </TwoColumnText>

      <Divider />

      <SectionTitle>Our Mission</SectionTitle>
      <SectionText>
        Our Neighborhood Association is dedicated to keeping the residents well informed about neighborhood activities/news, community events and July 4th parade through this website, our newsletter, and our private Facebook group.
      </SectionText>
    </Section>
  );
};

export default About; 