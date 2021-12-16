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

export default function Onboarding4(props) {
  return (
    <Container fluid>
      <Row>
        <Col
          className="d-flex align-items-left justify-content-center"
          sm={{ span: 4, offset: 1 }}
          md={{ span: 6, offset: 1.5 }}
        >
          <OnboardingTopSpacer>
            <ProgressBar now={60} />
            <BFaustinaH3 style={{ marginTop: '2em' }}>
              Sounds fun! While we&apos;re talking about guests, <br />a wedding
              website is the best way <br />
              to keep them in the loop
            </BFaustinaH3>

            <span style={{ display: 'flex', marginTop: '2em' }}>
              <BFaustinaH3 style={{ marginRight: '0.5em' }}>
                Share your registry, rsvp, and more! <br /> Get started on yours
                when you&apos;re ready
              </BFaustinaH3>
            </span>
            <Link to="/onboarding-5">
              <BlueButton style={{ marginTop: '9em', marginLeft: '20em' }}>
                Next
              </BlueButton>
            </Link>
          </OnboardingTopSpacer>
        </Col>
        <Col sm={5} md={5}>
          <OnboardingImageFit>
            <Image
              fluid
              src="https://images.unsplash.com/photo-1507915977619-6ccfe8003ae6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="wedding splash1"
            />
          </OnboardingImageFit>
        </Col>
      </Row>
    </Container>
  );
}
