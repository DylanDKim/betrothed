import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { BAlexBrush36 } from '../Common/styled/textstyles/AlexBrush36';
import { BFaustinaH2 } from '../Common/styled/textstyles/FaustinaH2';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';

const InfoRsvp = ({ onSameLine, showDeadline }) => (
  <>
    {onSameLine ? (
      <BAlexBrushH1 className="d-flex justify-content-center mt-5">
        Hanna Rosales & Ali Levy
      </BAlexBrushH1>
    ) : (
      <>
        <BAlexBrushH1 className="d-flex justify-content-center mt-3">
          Hanna Rosales
        </BAlexBrushH1>
        <BAlexBrushH1 className="d-flex justify-content-center mt-1">
          &
        </BAlexBrushH1>
        <BAlexBrushH1 className="d-flex justify-content-center mt-1">
          Ali Levy
        </BAlexBrushH1>
      </>
    )}
    <BFaustinaH2
      className="d-flex justify-content-center"
      style={{
        fontStyle: 'italic',
      }}
    >
      invite you to celebrate their wedding
    </BFaustinaH2>
    <StyledHeader className="d-flex justify-content-center mt-5">
      Saturday, January 8th, 2022
    </StyledHeader>
    <StyledHeader className="d-flex justify-content-center">
      4:30 PM
    </StyledHeader>
    <StyledHeader className="d-flex justify-content-center mt-5">
      Beaulieu Garden
    </StyledHeader>
    <StyledHeader className="d-flex justify-content-center">
      3142 Azalea Lane
    </StyledHeader>
    <StyledHeader className="d-flex justify-content-center">
      Lane Rutherford, CA, 92314
    </StyledHeader>
    {showDeadline && (
      <StyledHeader
        className="d-flex justify-content-center mt-3"
        style={{ color: 'red' }}
      >
        Deadline to RSVP: 12/14/2021
      </StyledHeader>
    )}
  </>
);

const TempHeader = styled.div`
  font-family: Faustina serif;
  font-style: italic;
`;

const StyledHeader = styled(BFaustinaH3)`
  font-style: italic;
`;

export default InfoRsvp;
