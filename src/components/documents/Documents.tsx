import React from 'react';
import styled from 'styled-components';

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

const List = styled.ul`
  margin-top: 1rem;
  list-style: none;
  padding: 0;
  space-y: 0.5rem;
`;

const ListItem = styled.li`
  color: #4b5563;
`;

const Documents: React.FC = () => {
  return (
    <Section>
      <SectionTitle>Important Documents</SectionTitle>
      <List>
        <ListItem>• Bylaws</ListItem>
        <ListItem>• Meeting Minutes</ListItem>
        <ListItem>• Community Guidelines</ListItem>
      </List>
    </Section>
  );
};

export default Documents; 