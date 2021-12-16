import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, ProgressBar, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistryCard from './RegistryCard';
import InvitationCard from './InvitationCard';
import GuestListCard from './GuestListCard';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';
import { BFaustinaH2 } from '../Common/styled/textstyles/FaustinaH2';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';
import CardFormat from '../Common/styled/cardstyles/cardformat';

export default function Dashboard(props) {
  const [firstName, setFirstName] = useState('John');
  const [partnerFirstName, setPartnerFirstName] = useState('Jane');
  const [daysLeft, setDaysLeft] = useState('2');
  const [progress, setProgress] = useState(0);

  return (
    <Container fluid>
      {/* <Row
        className="d-flex justify-content-between"
        style={{ marginTop: '3em' }}
      >
        <Col md={{ offset: 1 }}>
          <BAlexBrushH1>
            {firstName} and {partnerFirstName}
          </BAlexBrushH1>
        </Col>
        <Col className="d-flex justify-content-end">
          <BFaustinaH3>{daysLeft} days left!</BFaustinaH3>
        </Col>
      </Row> */}
      <div
        style={{
          height: '26em',
          backgroundColor: 'grey',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <img
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            objectPosition: '0 70%',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          src="https://images.unsplash.com/photo-1566838318109-a8bffb91d082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="dashboard cover"
        />
        <BAlexBrushH1 style={{ position: 'absolute', top: '1em', left: '3em' }}>
          {firstName} and {partnerFirstName}
        </BAlexBrushH1>
        <BFaustinaH3 style={{ position: 'absolute', top: '1em', right: '1em' }}>
          Add a photo
        </BFaustinaH3>
        <BFaustinaH3 style={{ position: 'absolute', top: '3em', right: '1em' }}>
          {daysLeft} days left!
        </BFaustinaH3>

        <i className="BsCameraFill " />
      </div>

      <ProgressBar style={{ marginTop: '1em' }} now={progress} />
      <Row style={{ marginTop: '3em' }}>
        <Col md={{ offset: 1 }}>
          <BFaustinaH2 style={{ marginBottom: '1em' }}>
            Planning tools
          </BFaustinaH2>
        </Col>
      </Row>
      <Row style={{ margin: '.5em 4em 6em 4em' }}>
        <Col className="d-flex justify-content-around">
          <GuestListCard />
        </Col>
        <Col className="d-flex justify-content-around">
          <InvitationCard />
        </Col>
        <Col className="d-flex justify-content-around">
          <RegistryCard />
        </Col>
      </Row>
    </Container>
  );
}
