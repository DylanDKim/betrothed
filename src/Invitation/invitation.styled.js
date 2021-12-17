import styled from 'styled-components';

export const FittedImg = styled.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 10 / 3;
  round;
  overflow: hidden;
`;

export const ThemeImg = styled.img`
  cursor: pointer;
  border: 1px gray solid;
  object-fit: cover;
`;
