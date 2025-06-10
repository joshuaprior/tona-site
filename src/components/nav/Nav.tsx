import React from 'react';
import styled from 'styled-components';
import logoImage from '../../media/tona-tree.PNG';

interface NavContainerProps {
  background?: boolean;
}

const NavContainer = styled.nav<NavContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${({ background }) => background ? '#2b4a2d' : 'transparent'};
  z-index: 1000;
  /* box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); */
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
  height: 4rem;
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
  color: white;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: end;
  flex: 2;
`;

const NavLink = styled.a`
  color: white;
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

interface NavProps {
  onNavigation: (page: { page: 'home' | 'about' | 'documents' }) => void;
  background?: boolean;
}

const Nav: React.FC<NavProps> = ({ onNavigation, background }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, page: 'home' | 'about' | 'documents') => {
    e.preventDefault();
    onNavigation({ page });
  };

  return (
    <NavContainer background={background}>
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
    </NavContainer>
  );
};

export default Nav; 