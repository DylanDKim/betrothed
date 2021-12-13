import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const BlueButton = styled(Button)`
  font-family: 'Faustina';
  background-color: white;
  color: #90b0c5;
  border: 3px solid #90b0c5;

  &:hover,
  &:focus {
    background-color: white;
    color: #5f7483;
    border: 3px solid #5f7483;
  }
`;

export default BlueButton;
