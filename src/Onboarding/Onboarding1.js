import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';

export default function Onboarding1(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [partnerFirstName, setPartnerFirstName] = useState('');
  const [partnerLastName, setPartnerLastName] = useState('');

  return (
    <Container fluid>
      <Row style={{ height: '100vh', marginLeft: '15%' }}>
        <Col
          style={{ marginBottom: '20%' }}
          className="d-flex align-items-center justify-content-center"
          sm={8}
          md={8}
        >
          <div>
            <BAlexBrushH1>Congratulations</BAlexBrushH1>
            <BFaustinaH3>
              Tell us about yourself so we can
              {'\n'}customize your planning experience.
            </BFaustinaH3>
            <BFaustinaH3>My name is</BFaustinaH3>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
            <BFaustinaH3>And my partner&apos;s name is</BFaustinaH3>
            <input
              type="text"
              required
              value={partnerFirstName}
              onChange={(e) => setPartnerFirstName(e.target.value)}
              placeholder="First Name"
            />
            <input
              type="text"
              required
              value={partnerLastName}
              onChange={(e) => setPartnerLastName(e.target.value)}
              placeholder="Last Name"
            />
            <Link to="/onboarding-2">
              <BlueButton>Next</BlueButton>
            </Link>
          </div>
        </Col>
        <Col>
          <div>Right side image placeholder</div>
        </Col>
      </Row>
    </Container>
  );
}
