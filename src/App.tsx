import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import UpcomingEvents from './components/UpcomingEvents';
import EventCard from './components/EventCard';
import Nav from './components/nav/Nav';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #f9fafb; 
    color: #111827;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  * {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const Header = styled.header`
  position: relative;
  background-color: white;
`;

const Main = styled.main`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const MainContent = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  @media (min-width: 640px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

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

const Footer = styled.footer`
  background-color: white;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-top: 2rem;
`;

const FooterContent = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const FooterText = styled.p`
  text-align: center;
  color: #6b7280;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Nav />
        </Header>

        <Main>
          <MainContent>
            <UpcomingEvents>
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
              <EventCard />
            </UpcomingEvents>
            <Section>
              <SectionTitle>Get Involved</SectionTitle>
              <SectionText>Ways to help our community thrive:</SectionText>
              <List>
                <ListItem>• Community clean-up days</ListItem>
                <ListItem>• Neighborhood watch program</ListItem>
                <ListItem>• Community garden maintenance</ListItem>
              </List>
            </Section>
          </MainContent>
        </Main>

        <Footer>
          <FooterContent>
            <FooterText>© 2024 Thousand Oaks Community. All rights reserved.</FooterText>
          </FooterContent>
        </Footer>
      </AppContainer>
    </>
  );
};

export default App;
