import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const PlumButton = styled(Button)`
  font-family: 'Faustina';
  background-color: white;
  color: #8b5b6e;
  border: 3px solid #8b5b6e;

  &:hover,
  &:focus {
    background-color: white;
    color: #5c3c49;
    border: 3px solid #5c3c49;
  }
`;

export default PlumButton;
