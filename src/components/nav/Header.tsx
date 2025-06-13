import React, { useState } from 'react';
import styled from 'styled-components';
import logoImage from '../../media/tona-tree.PNG';
import facebookIcon from '../../media/facebook.svg'; // Import the Facebook icon
import hamburgerIcon from '../../media/hamburger.svg'; // Import the Hamburger icon
import BREAK_POINTS from '../../constants/break-points';
import NavLinks from './NavLinks'; // Updated import name
import ContactUsLinks from './ContactUsLinks'; // Import the new ContactUsLinks component

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  height: var(--nav-header-height);
`;

const HeaderBackground = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: var(--nav-header-height);
  background-color: var(--shell-background-color);
  z-index: 1;
  margin-bottom: 2rem;

  background: rgba( 43, 74, 45, 0.8 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 9px );
  -webkit-backdrop-filter: blur( 9px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const NavContent = styled.div`
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 2;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const HeaderLeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  /* This group will be on the left due to NavContent's justify-content: space-between */
`;

const ContactUsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: ${BREAK_POINTS.MOBILE}) {
    display: none;
  }
`;

const HamburgerIcon = styled.img`
  display: none;
  height: 1.5rem;
  width: auto;
  filter: brightness(0) invert(1);
  cursor: pointer;

  @media (max-width: ${BREAK_POINTS.MOBILE}) {
    display: block;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;

  @media (max-width: ${BREAK_POINTS.MOBILE}) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    flex: none;
  }
`;

const LogoImage = styled.img`
  height: 2.5rem;
  width: auto;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--shell-color);
`;

const NavLinksContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: end;
  flex: 2;

  @media (max-width: ${BREAK_POINTS.MOBILE}) {
    display: none;
  }
`;

interface DrawerContainerProps {
  isOpen: boolean;
}

const DrawerContainer = styled.div<DrawerContainerProps>`
  --drawer-width: 250px;
  display: none;
  position: fixed;
  top: var(--nav-header-height);
  left: ${({ isOpen }) => isOpen ? '0' : 'calc(-1 * var(--drawer-width))'};
  width: var(--drawer-width); 
  height: calc(100vh - var(--nav-header-height));
  background-color: var(--shell-background-color);
  padding: 1rem;
  z-index: 999;
  box-shadow: 2px 0 5px rgba(0,0,0,0.1);
  transition: left 0.3s ease-in-out;

  @media (max-width: ${BREAK_POINTS.MOBILE}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
`;

const DrawerContactUsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

interface HeaderProps {
  onNavigation: (page: { page: 'home' | 'about' | 'documents' }) => void;
  background?: boolean;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ onNavigation, background, children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, page: 'home' | 'about' | 'documents') => {
    e.preventDefault();
    onNavigation({ page });
    if (isDrawerOpen) {
      setIsDrawerOpen(false); // Close drawer on navigation
    }
  };

  return (
    <>
      <HeaderContainer>
        <NavContent>
          <HeaderLeftGroup>
            <HamburgerIcon src={hamburgerIcon} alt="Menu" onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
            <LogoContainer>
              <LogoImage src={logoImage} alt="TONA Logo" />
              <LogoText>TONA</LogoText>
            </LogoContainer>
            <ContactUsContainer>
              <ContactUsLinks />
            </ContactUsContainer>
          </HeaderLeftGroup>
          <NavLinksContainer>
            <NavLinks onLinkClick={handleClick} />
          </NavLinksContainer>
        </NavContent>
      </HeaderContainer>
      {children}
      <HeaderBackground />
      <DrawerContainer isOpen={isDrawerOpen}>
        <NavLinks onLinkClick={handleClick} />
        <DrawerContactUsContainer>
          <ContactUsLinks />
        </DrawerContactUsContainer>
      </DrawerContainer>
    </>
  );
};

export default Header;