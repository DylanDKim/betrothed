import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const WhiteButton = styled(Button)`
  font-family: 'Faustina';
  background-color: #8b5b6e;
  color: white;
  border: 3px solid white;

  &:hover,
  &:focus {
    background-color: #5c3c49;
    color: white;
    border: 3px solid white;
  }
`;

export default WhiteButton;
