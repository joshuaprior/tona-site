import React from 'react';
import styled from 'styled-components';
import { Card, CardTitle, CardText } from '../Cards';

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
    <Card>
      <CardTitle>Important Documents</CardTitle>
      <List>
        <ListItem>• TONA Bylaws</ListItem>
        <ListItem>• 1985 Thousand Oaks Master Plan Report</ListItem>
        <ListItem>• Thousand Oaks Park Tree Management Plan</ListItem>
        <ListItem>• TONA Tree Image (to use in swag)</ListItem>
        <ListItem>• Other PDFs?</ListItem>
        <ListItem>• Meetings (recordings, transcripts, summaries)</ListItem>
      </List>
    </Card>
  );
};

export default Documents; 