import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const PlumButton = styled(Button)`
  font-family: 'Faustina';
  background-color: white;
  color: #8b5b6e;
  border: 3px solid #8b5b6e;

  &:hover,
  &:focus {
    background: #8b5b6e;
    color: white;
    border: 3px solid #8b5b6e;
  }
`;

export default PlumButton;
