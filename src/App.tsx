import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/nav/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Documents from './components/documents/Documents';
import Hero from './components/home/Hero';

const GlobalStyle = createGlobalStyle`
  body {
    --nav-header-height: 4rem;
    --shell-color: white;
    --shell-background-color: #2b4a2d;
  }

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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: transparent;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  
`;

const Footer = styled.footer`
  margin-top: 2rem;
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`;

const FooterContent = styled.div`
  flex 0 0 0px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  background-color: var(--shell-background-color);
  box-shadow: 0 -1px 3px 0 rgba(0, 0, 0, 0.1), 0 -1px 2px 0 rgba(0, 0, 0, 0.06);

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
  color: var(--shell-color);
`;

const BackgroundGrid = styled.div`
  position: fixed; /* Locks the grid in place relative to the viewport */
  top: 0;
  left: 0;
  padding: 30px; /* Adds a 30px gap around the entire grid */
  background-color: #e8e9d3; /* Off-white background for the grid area and gaps */
  /* Width and height will be determined by the grid content */
  display: grid;
  grid-template-columns: repeat(5, 500px); /* 5 images wide, each 500px */
  grid-template-rows: repeat(4, 500px);    /* 4 images high, each 500px */
  gap: 30px; /* Adds a 30px gap between grid items (images) */
  z-index: -1; /* Places the grid behind all other content in AppContainer */
  pointer-events: none; /* Ensures the grid doesn't interfere with mouse events */
  overflow: hidden;
`;

const GridImageTile = styled.div<{ $imageUrl: string }>`
  width: 500px; /* Fixed width for the image tile */
  height: 500px; /* Fixed height for the image tile */
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50px; /* Adds rounded corners to the image tiles */
  opacity: .1;
`;

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'documents'>('home');
  const [isHeroInView, setIsHeroInView] = useState(true);

  const handleNavigation = ({ page }: { page: 'home' | 'about' | 'documents' }) => {
    setCurrentPage(page);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'documents':
        return <Documents />;
      default:
        return null;
    }
  };

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <BackgroundGrid>
          {Array.from({ length: 20 }).map((_, index) => (
            <GridImageTile key={index} $imageUrl={`media/background/image${(index + 1).toString().padStart(2, '0')}.png`} />
          ))}
        </BackgroundGrid>
        <Header onNavigation={handleNavigation} background={currentPage === 'home' ? !isHeroInView : true}>
          {currentPage === 'home' && (
            <Hero onViewChange={(inView) => setIsHeroInView(inView)} />
          )}
        </Header>

        <Main>
          {renderPageContent()}
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
