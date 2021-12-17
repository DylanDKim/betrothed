import styled from 'styled-components';
import { Button } from 'react-bootstrap';

const GuestBMerr18 = styled.tr`
  font-family: 'Faustina';
  font-size: 18px;
  margin: 0px;
`;

const GuestBMerr24 = styled.div`
  font-family: 'Faustina';
  font-size: 24px;
  margin: 0px;
  text-align: center;
`;

const GuestTableBMerr22 = styled.div`
  font-family: 'Faustina';
  font-size: 22px;
  margin: 0px;
  font-weight: normal;
`;

const PlumFilledDeleteButton = styled(Button)`
  font-family: 'Faustina';
  font-size: 18px;
  background: #8b5b6e;
  color: white;
  margin: 0px;

  border: 3px solid #8b5b6e;

  &:hover,
  &:focus {
    background-color: #5c3c49;
    color: white;
    border: 3px solid #5c3c49;
  }
`;

export {
  GuestBMerr18,
  GuestBMerr24,
  GuestTableBMerr22,
  PlumFilledDeleteButton,
};
