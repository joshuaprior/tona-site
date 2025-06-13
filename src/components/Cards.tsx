import styled from 'styled-components';

export const Card = styled.section`
  padding: 1.5rem;
  
  background: rgba( 255, 255, 255, 0.8 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );

  ${() => CardBackground} & {
    background: rgba( 255, 255, 255, 0.9 );
    box-shadow: none;
  }
`;

export const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  color: #4b5563;
`;

export const CardBackground = styled.section`
  padding: 1.5rem;
  
  background: rgba( 0, 0, 0, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`;