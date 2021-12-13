import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const WhiteFilledButton = styled(Button)`
  font-family: 'Faustina';
  background: white;
  color: #8b5b6e;
  &:hover,
  &:focus {
    color: #5c3c49;
  }
`;

export default WhiteFilledButton;
