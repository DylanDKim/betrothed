import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const InfoRsvp = () => (
  <>
    <TempHeader
      className="d-flex justify-content-center mt-5"
      style={{
        fontSize: '36px',
      }}
    >
      Hanna Rosales & Ali Levy
    </TempHeader>
    <TempHeader
      className="d-flex justify-content-center"
      style={{
        fontSize: '28px',
      }}
    >
      invite you to celebrate their wedding
    </TempHeader>
    <TempSubheader className="d-flex justify-content-center mt-3">
      Saturday, January 8th, 2022
    </TempSubheader>
    <TempSubheader className="d-flex justify-content-center">
      4:30 PM
    </TempSubheader>
    <TempSubheader className="d-flex justify-content-center mt-3">
      Beaulieu Garden
    </TempSubheader>
    <TempSubheader className="d-flex justify-content-center">
      3142 Azalea Lane
    </TempSubheader>
    <TempSubheader className="d-flex justify-content-center">
      Lane Rutherford, CA, 92314
    </TempSubheader>
    <TempSubheader
      className="d-flex justify-content-center mt-3"
      style={{ color: 'red' }}
    >
      Deadline to RSVP: 12/14/2021
    </TempSubheader>
  </>
);

const TempHeader = styled.div`
  font-family: Faustina serif;
  font-style: italic;
`;

const TempSubheader = styled(TempHeader)`
  font-size: 18px;
`;

export default InfoRsvp;
