import React from 'react';
import styled from 'styled-components';
import logoImage from '../../media/tona-tree.PNG';
import facebookIcon from '../../media/facebook.svg'; // Import the Facebook icon
import emailIcon from '../../media/email.svg'; // Import the Email icon
import hamburgerIcon from '../../media/hamburger.svg'; // Import the Hamburger icon

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
  gap: 0.75rem; /* Add some space between icons */
`;

const IconLink = styled.a`
  display: inline-block;
  line-height: 0;
`;

const ContactIcon = styled.img`
  height: 2rem;
  width: auto;
  filter: brightness(0) invert(1); 
`;

const HamburgerIcon = styled.img`
  display: none; /* Hidden by default */
  height: 1.5rem; /* Adjust size as needed */
  width: auto;
  filter: brightness(0) invert(1); /* Assuming you want it white like other icons */
  cursor: pointer; /* Indicate it will be clickable later */

  @media (max-width: 768px) { /* Show on mobile devices */
    display: block;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
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

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: end;
  flex: 2;

  @media (max-width: 768px) { /* Hide on mobile devices */
    display: none;
  }
`;

const NavLink = styled.a`
  color: var(--shell-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
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
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, page: 'home' | 'about' | 'documents') => {
    e.preventDefault();
    onNavigation({ page });
  };

  return (
    <>
      <HeaderContainer>
        <NavContent>
          <HeaderLeftGroup>
            <HamburgerIcon src={hamburgerIcon} alt="Menu" />
            <LogoContainer>
              <LogoImage src={logoImage} alt="TONA Logo" />
              <LogoText>TONA</LogoText>
            </LogoContainer>
            <ContactUsContainer>
              <IconLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
                <ContactIcon src={facebookIcon} alt="Facebook" />
              </IconLink>
              <IconLink href="mailto:tona.sanjose@gmail.com" aria-label="Send us an email">
                <ContactIcon src={emailIcon} alt="Email" />
              </IconLink>
            </ContactUsContainer>
          </HeaderLeftGroup>
          <NavLinks>
            <NavLink href="#" onClick={(e) => handleClick(e, 'home')}>Home</NavLink>
            <NavLink href="#" onClick={(e) => handleClick(e, 'about')}>About</NavLink>
            <NavLink href="#" onClick={(e) => handleClick(e, 'documents')}>Documents</NavLink>
          </NavLinks>
        </NavContent>
      </HeaderContainer>
      {children}
      <HeaderBackground />
    </>
  );
};

export default Header;