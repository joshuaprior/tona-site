import React from 'react';
import styled from 'styled-components';

const BoardMemberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 0.5rem;
  object-fit: cover;
  margin-bottom: 1rem;
`;

const MemberName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin: 0 0 0.5rem 0;
  text-align: center;
  white-space: nowrap;
`;

const MemberTitle = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  text-align: center;
`;

interface BoardMemberProps {
  image?: string;
  name: string;
  title: string;
}

const BoardMember: React.FC<BoardMemberProps> = ({ image, name, title }) => {
  return (
    <BoardMemberContainer>
      {image && <MemberImage src={image} alt={name} />}
      <MemberName>{name}</MemberName>
      <MemberTitle>{title}</MemberTitle>
    </BoardMemberContainer>
  );
};

export default BoardMember; 