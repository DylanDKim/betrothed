import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, ProgressBar, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistryCard from './RegistryCard';
import InvitationCard from './InvitationCard';
import GuestListCard from './GuestListCard';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';
import CardFormat from '../Common/styled/cardstyles/cardformat';

export default function Dashboard(props) {
  const [firstName, setFirstName] = useState('John');
  const [partnerFirstName, setPartnerFirstName] = useState('Jane');
  const [daysLeft, setDaysLeft] = useState('2');

  return (
    <Container fluid>
      <Row>
        <Col>
          <BAlexBrushH1>
            {firstName} and {partnerFirstName}
          </BAlexBrushH1>
        </Col>
        <Col className="align-items-right">
          <h2>{daysLeft} days left!</h2>
        </Col>
      </Row>
      <div style={{ height: '16em', backgroundColor: 'grey' }}>
        <img alt="dashboard cover" />
        <div>Choose a photo</div>
        <i className="BsCameraFill " />
      </div>

      <ProgressBar style={{ marginTop: '1em' }} now={0} />
      <h3>Planning tools</h3>
      <CardFormat>
        <GuestListCard />
        <InvitationCard />
        <RegistryCard />
      </CardFormat>
    </Container>
  );
}
