import styled from 'styled-components';

export const FittedImg = styled.img`
  object-fit: cover;
  width: 100%;
  aspect-ratio: 10 / 3;
  round;
`;

export const ThemeImg = styled.img`
  cursor: pointer;
  border: 3px gray solid;
  &.marked {
    // color: rgb(179, 0, 0);
    // text-decoration: none;
    cursor: help;
    &:active {
      // transform: none;
      border: '2px red solid';
    }
  }
`;
