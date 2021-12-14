import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoRsvp from './InfoRSVP';
import Status from './Status';
import NewRsvp from './NewRSVP';
import EditRsvp from './EditRSVP';

<<<<<<< HEAD
const RsvpForm = () => {
  const [currentStep, updateStep] = useState('status');

  return (
    <Container fluid>
      <Row style={{ height: '100vh' }}>
        <Col md={7} sm={12}>
          <InfoRsvp />
          {currentStep === 'status' && <Status updateStep={updateStep} />}
          {currentStep === 'new' && <NewRsvp updateStep={updateStep} />}
          {currentStep === 'edit' && <EditRsvp updateStep={updateStep} />}
          {/* {currentStep === 'newConfirmation' && <Status />} */}
          {/* {currentStep === 'editConfirmation' && <Status />} */}
          <footer>
            <h2
              className="d-flex justify-content-center"
              style={{
                fontFamily: 'Alex Brush',
                fontSize: '28px',
                marginTop: '10vh',
                marginBottom: '0',
              }}
            >
              Betrothed
            </h2>
            <p
              className="d-flex justify-content-center"
              style={{
                fontFamily: 'Faustina serif',
                fontSize: '16px',
                marginBottom: '0',
              }}
            >
              Welcome to your day, your way
            </p>
          </footer>
        </Col>
        <Col
          md={5}
          sm={12}
          style={{
            height: '100vh',
            overflow: 'hidden',
            paddingLeft: '0',
            paddingRight: '0',
          }}
        >
          <Image
            style={{ maxWidth: '100%', height: 'auto' }}
            src="https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1875&q=80"
            alt="flowers"
          />
        </Col>
      </Row>
    </Container>
  );
};
=======
const RsvpForm = () => (
  <Container fluid>
    <Row style={{ height: '100vh' }}>
      <Col md={7} sm={12}>
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

        <Status />
        <footer>
          <h2
            className="d-flex justify-content-center"
            style={{
              fontFamily: 'Alex Brush',
              fontSize: '28px',
              marginTop: '10vh',
              marginBottom: '0',
            }}
          >
            Betrothed
          </h2>
          <p
            className="d-flex justify-content-center"
            style={{
              fontFamily: 'Faustina serif',
              fontSize: '16px',
              marginBottom: '0',
            }}
          >
            Welcome to your day, your way
          </p>
        </footer>
      </Col>
      <Col
        md={5}
        sm={12}
        style={{
          height: '100vh',
          overflow: 'hidden',
          paddingLeft: '0',
          paddingRight: '0',
        }}
      >
        <Image
          style={{ maxWidth: '100%', height: 'auto' }}
          src="https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1875&q=80"
          alt="flowers"
        />
      </Col>
    </Row>
  </Container>
);
>>>>>>> 1c153d9 (Refactor of existing components to better utilize react-bootstrap)

const TempHeader = styled.div`
  font-family: Faustina serif;
  font-style: italic;
`;

const TempSubheader = styled(TempHeader)`
  font-size: 18px;
`;

export default RsvpForm;
