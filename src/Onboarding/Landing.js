import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, ProgressBar, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';
import BlueInput from '../Common/styled/inputstyles/inputstyle';
import {
  OnboardingImage,
  OnboardingImageFit,
} from '../Common/styled/imagestyles/imagestyle';
import OnboardingTopSpacer from '../Common/styled/spacers/onboardingspacer';

export default function Landing({ email, setEmail }) {
  const [date, setDate] = useState('0');
  return (
    <Container fluid>
      <Row>
        <Col
          className="d-flex align-items-left justify-content-center"
          sm={{ span: 4, offset: 1 }}
          md={{ span: 6, offset: 1.5 }}
        >
          <div
            style={{
              position: 'relative',
              textAlign: 'center',
              color: 'white',
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="flowers"
              style={{ position: 'relative' }}
            />
            <BAlexBrushH1
              style={{
                position: 'absolute',
                marginTop: '0.5em',
                top: '50%',
                left: '50%',
              }}
            >
              Betrothed
            </BAlexBrushH1>
            <div
              style={{
                position: 'absolute',
                marginTop: '2em',
                display: 'flex',
                top: '50%',
                left: '50%',
              }}
            >
              <div style={{ transform: 'translateY(-6px)' }}>
                <BlueInput
                  type="text"
                  required
                  value={props.email}
                  onChange={(e) => props.setEmail(e.target.value)}
                  placeholder="your email address"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
