import React from 'react';
import styled from 'styled-components';
import logoImage from '../../media/tona-tree.PNG';

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
  height: 100%; /* Fill the HeaderContainer's height */
  position: relative; /* To establish a stacking context for z-index */
  z-index: 2; /* Ensure NavContent is above BottomFill */
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (min-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
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
            <LogoContainer>
              <LogoImage src={logoImage} alt="TONA Logo" />
              <LogoText>TONA</LogoText>
            </LogoContainer>
            
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