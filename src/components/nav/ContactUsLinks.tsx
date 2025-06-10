import React from 'react';
import styled from 'styled-components';
import facebookIcon from '../../media/facebook.svg';
import emailIcon from '../../media/email.svg';

const IconLink = styled.a`
  display: inline-block;
  line-height: 0;
`;

const ContactIcon = styled.img`
  height: 2rem;
  width: auto;
  filter: brightness(0) invert(1); 
`;

const ContactUsLinks: React.FC = () => {
  return (
    <>
      <IconLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Visit our Facebook page">
        <ContactIcon src={facebookIcon} alt="Facebook" />
      </IconLink>
      <IconLink href="mailto:tona.sanjose@gmail.com" aria-label="Send us an email">
        <ContactIcon src={emailIcon} alt="Email" />
      </IconLink>
    </>
  );
};

export default ContactUsLinks;
