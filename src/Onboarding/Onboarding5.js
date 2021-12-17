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
  const [rsvpBy, setRsvpBy] = useState('');
  const link = `/event/${props.id}/dashboard`;

  return (
    <Container fluid>
      <Row>
        <Col
          className="d-flex align-items-left justify-content-center"
          sm={{ span: 4, offset: 1 }}
          md={{ span: 6, offset: 1.5 }}
        >
          <OnboardingTopSpacer>
            <ProgressBar now={100} />
            <BFaustinaH3 style={{ marginTop: '2em' }}>
              Lastly, when should guests RSVP by?
            </BFaustinaH3>

            <div style={{ marginTop: '5em' }}>
              <BFaustinaH3 style={{ marginRight: '0.5em' }}>
                Finalize guest list by
              </BFaustinaH3>
              <BlueInput
                style={{ width: '12em' }}
                type="datetime-local"
                required
                value={props.rsvpDeadline}
                onChange={(e) => props.setRSVPDeadline(e.target.value)}
              />
            </div>
            {/* <Link to={link}> */}
            <BlueButton
              onClick={props.createEvent}
              style={{ marginTop: '11em', marginLeft: '20em' }}
            >
              See your dashboard
            </BlueButton>
            {/* </Link> */}
          </OnboardingTopSpacer>
        </Col>
        <Col sm={5} md={5}>
          <OnboardingImageFit>
            <Image
              fluid
              src="https://images.unsplash.com/photo-1537274385128-70bd700a529c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=809h"
              alt="wedding splash1"
            />
          </OnboardingImageFit>
        </Col>
      </Row>
    </Container>
  );
}
