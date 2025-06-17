import styled from 'styled-components';

interface CardProps {
  tint?: 'red' | 'green' | 'blue' | 'brown' | 'black' | 'none';
}

export const Card = styled.section<CardProps>`
  --tint-none: rgb(255, 255, 255);
  --tint-red: rgb(195, 8, 8);
  --tint-green: rgb(23, 121, 6);
  --tint-blue: rgb(25, 0, 255);
  --tint-brown: rgb(217, 129, 17);
  --tint-black: rgb(0, 0, 0);
  
  --tint: var(--tint-${({ tint }) => tint || 'none'});
  
  
  padding: 1.5rem;
  
  background: rgba( from var(--tint) r g b / 0.15 );
  /*box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );*/
  backdrop-filter: blur( 8px );
  -webkit-backdrop-filter: blur( 8px );
  border-radius: 10px;
  border: 1px solid rgba( from var(--tint) r g b / 0.05 );
  color: hsl( from var(--tint) h s 20%);
  

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