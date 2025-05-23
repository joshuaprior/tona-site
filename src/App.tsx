import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import UpcomingEvents from './components/UpcomingEvents';
import EventCard from './components/EventCard';

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
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

const Nav = styled.nav`
  max-width: 1280px; /* Equivalent to max-w-7xl */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem; /* Equivalent to px-4 */
  padding-right: 1rem; /* Equivalent to px-4 */
  @media (min-width: 640px) {
    padding-left: 1.5rem; /* Equivalent to sm:px-6 */
    padding-right: 1.5rem; /* Equivalent to sm:px-6 */
  }
  @media (min-width: 1024px) {
    padding-left: 2rem; /* Equivalent to lg:px-8 */
    padding-right: 2rem; /* Equivalent to lg:px-8 */
  }
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 4rem; /* Equivalent to h-16 */
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  font-size: 1.5rem; /* Equivalent to text-2xl */
  font-weight: bold;
  color: #111827; /* Equivalent to text-gray-900 */
`;

const Main = styled.main`
  max-width: 1280px; /* Equivalent to max-w-7xl */
  margin-left: auto;
  margin-right: auto;
  padding-top: 1.5rem; /* Equivalent to py-6 */
  padding-bottom: 1.5rem; /* Equivalent to py-6 */
  padding-left: 1rem; /* Equivalent to sm:px-6 */
  padding-right: 1rem; /* Equivalent to sm:px-6 */
  @media (min-width: 1024px) {
    padding-left: 2rem; /* Equivalent to lg:px-8 */
    padding-right: 2rem; /* Equivalent to lg:px-8 */
  }
`;

const MainContent = styled.div`
  padding-left: 1rem; /* Equivalent to px-4 */
  padding-right: 1rem; /* Equivalent to px-4 */
  padding-top: 1.5rem; /* Equivalent to py-6 */
  padding-bottom: 1.5rem; /* Equivalent to py-6 */
  @media (min-width: 640px) {
    padding-left: 0; /* Equivalent to sm:px-0 */
    padding-right: 0; /* Equivalent to sm:px-0 */
  }
`;

const Section = styled.section`
  background-color: white;
  padding: 1.5rem; /* Equivalent to p-6 */
  border-radius: 0.5rem; /* Equivalent to rounded-lg */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-top: 1.5rem; /* Add some space between sections */
  &:first-child {
    margin-top: 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem; /* Equivalent to text-xl */
  font-weight: 600; /* Equivalent to font-semibold */
  margin-bottom: 1rem; /* Equivalent to mb-4 */
`;

const SectionText = styled.p`
  color: #4b5563; /* Equivalent to text-gray-600 */
`;

const List = styled.ul`
  margin-top: 1rem; /* Equivalent to mt-4 */
  list-style: none;
  padding: 0;
  space-y: 0.5rem; /* Equivalent to space-y-2 */
`;

const ListItem = styled.li`
  color: #4b5563; /* Equivalent to text-gray-600 */
`;

const Footer = styled.footer`
  background-color: white;
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06);
  margin-top: 2rem; /* Equivalent to mt-8 */
`;

const FooterContent = styled.div`
  max-width: 1280px; /* Equivalent to max-w-7xl */
  margin-left: auto;
  margin-right: auto;
  padding: 1rem; /* Equivalent to py-4 px-4 */
  @media (min-width: 640px) {
    padding-left: 1.5rem; /* Equivalent to sm:px-6 */
    padding-right: 1.5rem; /* Equivalent to sm:px-6 */
  }
  @media (min-width: 1024px) {
    padding-left: 2rem; /* Equivalent to lg:px-8 */
    padding-right: 2rem; /* Equivalent to lg:px-8 */
  }
`;

const FooterText = styled.p`
  text-align: center;
  color: #6b7280; /* Equivalent to text-gray-500 */
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <Nav>
            <NavContent>
              <LogoContainer>
                <LogoText>Thousand Oaks Community</LogoText>
              </LogoContainer>
            </NavContent>
          </Nav>
        </Header>

        <Main>
          <MainContent>
            <UpcomingEvents>
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
