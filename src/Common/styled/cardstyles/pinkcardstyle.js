import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const PinkFilledCard = styled(Card)`
  height: 26em;
  width: 8rem;
  background-color: #fff6f9;
  border-color: #ffb5cf;
`;

const PinkOpenCard = styled(Card)`
  height: 26em;
  width: 8rem;
  background-color: white;

  &:hover,
  &:focus {
    background-color: #fff6f9;
    border-color: #ffb5cf;
  }
`;

export { PinkFilledCard, PinkOpenCard };
