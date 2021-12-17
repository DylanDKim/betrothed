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

export default function Onboarding1(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [partnerFirstName, setPartnerFirstName] = useState('');
  const [partnerLastName, setPartnerLastName] = useState('');

  return (
    <Container fluid>
      <Row>
        <Col
          className="d-flex align-items-left justify-content-center"
          sm={{ span: 4, offset: 1 }}
          md={{ span: 6, offset: 1.5 }}
        >
          <OnboardingTopSpacer>
            <ProgressBar now={0} />
            <BAlexBrushH1 style={{ marginTop: '0.5em' }}>
              Congratulations
            </BAlexBrushH1>
            <BFaustinaH3>
              Tell us about yourself so we can <br />
              customize your planning experience.
            </BFaustinaH3>
            <div style={{ marginTop: '2em', display: 'flex' }}>
              <span>
                <BFaustinaH3>My name is</BFaustinaH3>
              </span>
              <div style={{ transform: 'translateY(-6px)' }}>
                <BlueInput
                  type="text"
                  required
                  value={props.firstName}
                  onChange={(e) => props.setFirstName(e.target.value)}
                  placeholder="first name"
                />
                <BlueInput
                  type="text"
                  required
                  value={props.lastName}
                  onChange={(e) => props.setLastName(e.target.value)}
                  placeholder="last name"
                />
              </div>
            </div>
            <BFaustinaH3>And my partner&apos;s name is</BFaustinaH3>
            <BlueInput
              type="text"
              required
              value={props.partnerFirstName}
              onChange={(e) => props.setPartnerFirstName(e.target.value)}
              placeholder="first name"
            />
            <BlueInput
              type="text"
              required
              value={props.partnerLastName}
              onChange={(e) => props.setPartnerLastName(e.target.value)}
              placeholder="last name"
            />
            <div style={{ marginTop: '3em' }}>
              <Link to="/onboarding-2">
                <BlueButton style={{ marginLeft: '20em' }}>Next</BlueButton>
              </Link>
            </div>
          </OnboardingTopSpacer>
        </Col>
        <Col sm={5} md={5}>
          <OnboardingImageFit>
            <Image
              fluid
              src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="wedding splash1"
            />
          </OnboardingImageFit>
        </Col>
      </Row>
    </Container>
  );
}
