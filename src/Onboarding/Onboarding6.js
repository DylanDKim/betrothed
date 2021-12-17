import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, ProgressBar, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';
import BlueInput from '../Common/styled/inputstyles/inputstyle';
import { OnboardingImageFit } from '../Common/styled/imagestyles/imagestyle';
import OnboardingTopSpacer from '../Common/styled/spacers/onboardingspacer';
import Progress from '../Common/styled/Progress';

export default function Onboarding6(props) {
  // const [weddingDate, setWeddingDate] = useState('');

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
              Where is it happening?
            </BFaustinaH3>
            <BlueInput
              style={{ marginTop: '3em', width: '8em' }}
              type="string"
              required
              value={props.venue}
              onChange={(e) => props.setVenue(e.target.value)}
              placeholder="Venue"
            />
            <br />
            <BlueInput
              style={{ width: '8em' }}
              type="string"
              required
              value={props.addressLine1}
              onChange={(e) => props.setAddressLine1(e.target.value)}
              placeholder="Address Line 1"
            />
            <br />
            <BlueInput
              style={{ width: '8em' }}
              type="string"
              required
              value={props.addressLine2}
              onChange={(e) => props.setAddressLine2(e.target.value)}
              placeholder="Address Line 2"
            />
            <br />

            <BlueInput
              style={{ width: '8em' }}
              type="string"
              required
              value={props.city}
              onChange={(e) => props.setCity(e.target.value)}
              placeholder="City"
            />
            <br />

            <BlueInput
              style={{ width: '4em' }}
              type="string"
              required
              value={props.state}
              onChange={(e) => props.setState(e.target.value)}
              placeholder="State"
            />
            <BlueInput
              style={{ width: '5em' }}
              type="string"
              required
              value={props.zip}
              onChange={(e) => props.setZip(e.target.value)}
              placeholder="zip"
            />

            <div style={{ marginTop: '2em' }} />
            <div style={{ marginTop: '3em' }}>
              <Link to="/onboarding-3">
                <BlueButton style={{ marginLeft: '20em' }}>Next</BlueButton>
              </Link>
            </div>
          </OnboardingTopSpacer>
        </Col>
        <Col sm={5} md={5}>
          <OnboardingImageFit>
            <Image
              fluid
              src="https://images.unsplash.com/photo-1544592732-83bbbfc46783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
              alt="wedding splash1"
            />
          </OnboardingImageFit>
        </Col>
      </Row>
    </Container>
  );
}
