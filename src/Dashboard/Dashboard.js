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
      <Row
        className="d-flex justify-content-between"
        style={{ marginTop: '1em' }}
      >
        <Col>
          <BAlexBrushH1>
            {firstName} and {partnerFirstName}
          </BAlexBrushH1>
        </Col>
        <Col>
          <BFaustinaH3>{daysLeft} days left!</BFaustinaH3>
        </Col>
      </Row>
      <div style={{ height: '16em', backgroundColor: 'grey' }}>
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
        <i className="BsCameraFill " />
      </div>

      <ProgressBar style={{ marginTop: '1em' }} now={0} />
      <h3>Planning tools</h3>
      <Row className="d-flex justify-content-around">
        <Col>
          <GuestListCard />
        </Col>
        <Col>
          <InvitationCard />
        </Col>
        <Col>
          <RegistryCard />
        </Col>
      </Row>
    </Container>
  );
}
