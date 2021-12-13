import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const PlumFilledButton = styled(Button)`
  font-family: 'Faustina';
  background: #8b5b6e;
  color: white;

  border: 3px solid #8b5b6e;

  &:hover,
  &:focus {
    background-color: #5c3c49;
    color: white;
    border: 3px solid #5c3c49;
  }
`;

export default PlumFilledButton;
