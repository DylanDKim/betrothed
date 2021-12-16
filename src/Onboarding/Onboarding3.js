import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, ProgressBar, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';
import BlueInput from '../Common/styled/inputstyles/inputstyle';
import {
  OnboardingImage,
  OnboardingImageFit,
} from '../Common/styled/imagestyles/imagestyle';
import OnboardingTopSpacer from '../Common/styled/spacers/onboardingspacer';

export default function Onboarding3(props) {
  const [guestCount, setGuestCount] = useState('');

  return (
    <Container fluid>
      <Row>
        <Col
          className="d-flex align-items-left justify-content-center"
          sm={{ span: 4, offset: 1 }}
          md={{ span: 6, offset: 1.5 }}
        >
          <OnboardingTopSpacer>
            <ProgressBar now={40} />
            <BFaustinaH3 style={{ marginTop: '2em' }}>
              What is your estimated guest count?
            </BFaustinaH3>

            <span style={{ display: 'flex', marginTop: '5em' }}>
              <BFaustinaH3 style={{ marginRight: '0.5em' }}>
                We plan to invite
              </BFaustinaH3>
              <BlueInput
                style={{ transform: 'translateY(-6px)', width: '2em' }}
                type="number"
                required
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                placeholder="0"
              />
              <BFaustinaH3>guests</BFaustinaH3>
            </span>
            <div style={{ marginTop: '2em' }} />
            <div style={{ marginTop: '3em' }}>
              <Link to="/onboarding-4">
                <BlueButton style={{ marginTop: '8em', marginLeft: '20em' }}>
                  Next
                </BlueButton>
              </Link>
            </div>
          </OnboardingTopSpacer>
        </Col>
        <Col sm={5} md={5}>
          <OnboardingImageFit>
            <Image
              fluid
              src="https://images.unsplash.com/photo-1603214924133-5c2c78471b73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
              alt="wedding splash1"
            />
          </OnboardingImageFit>
        </Col>
      </Row>
    </Container>
  );
}
