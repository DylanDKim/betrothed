import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const BlueFilledCard = styled(Card)`
  height: 26em;
  width: 8rem;
  background-color: #f9fcff;
  border-color: #90b0c5;
`;

const BlueOpenCard = styled(Card)`
  height: 26em;
  width: 8rem;
  background-color: white;

  &:hover,
  &:focus {
    background-color: #f9fcff;
    border-color: #90b0c5;
  }
`;

export { BlueFilledCard, BlueOpenCard };
