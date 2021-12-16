import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoRsvp from './InfoRSVP';
import Status from './Status';
import NewRsvp from './NewRSVP';
import EditRsvp from './EditRSVP';

const RsvpForm = () => {
  const [currentStep, updateStep] = useState('status');
  const [rsvpData, updateData] = useState(null);

  return (
    <Container fluid>
      <Row style={{ height: '100vh' }}>
        <Col
          md={8}
          sm={12}
          style={{
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <InfoRsvp onSameLine />
          {currentStep === 'status' && (
            <Status updateStep={updateStep} updateData={updateData} />
          )}
          {currentStep === 'new' && (
            <NewRsvp updateStep={updateStep} rsvpData={rsvpData} />
          )}
          {currentStep === 'edit' && (
            <EditRsvp updateStep={updateStep} rsvpData={rsvpData} />
          )}
          <br />
          <br />
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
          md={4}
          sm={12}
          style={{
            height: '100vh',
            overflow: 'hidden',
            paddingLeft: '0',
            paddingRight: '0',
          }}
        >
          <Image
            style={{ maxWidth: '100%', height: '100vh' }}
            src="https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1875&q=80"
            alt="flowers"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default RsvpForm;
