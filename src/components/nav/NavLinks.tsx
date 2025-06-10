import React from 'react';
import styled from 'styled-components';
import BREAK_POINTS from '../../constants/break-points'; // Assuming BREAK_POINTS might be used here or for consistency

export const NavLink = styled.a`
  color: var(--shell-color);
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s ease-in-out;
  cursor: pointer;
`;

interface NavLinksProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, page: 'home' | 'about' | 'documents') => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ onLinkClick }) => {
  return (
    <>
      <NavLink href="#" onClick={(e) => onLinkClick(e, 'home')}>Home</NavLink>
      <NavLink href="#" onClick={(e) => onLinkClick(e, 'about')}>About</NavLink>
      <NavLink href="#" onClick={(e) => onLinkClick(e, 'documents')}>Documents</NavLink>
    </>
  );
};

export default NavLinks;
