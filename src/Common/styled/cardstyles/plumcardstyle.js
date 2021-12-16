import styled from 'styled-components';
import { Card } from 'react-bootstrap';

const PlumFilledCard = styled(Card)`
  height: 26em;
  width: 8m;
  background-color: #f1e8ec;
  border-color: #8b5b6e;
`;

const PlumOpenCard = styled(Card)`
  height: 26em;
  width: 8em;
  background-color: white;

  &:hover,
  &:focus {
    background-color: #f1e8ec;
    border-color: #8b5b6e;
  }
`;

export { PlumFilledCard, PlumOpenCard };
