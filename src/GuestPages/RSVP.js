import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Status from './Status';
import NewRsvp from './NewRSVP';

const RsvpForm = () => (
  <Container fluid>
    <Container fluid>
      <div>Side Image??</div>
      <div>Couple1 Name</div>
      <div>&</div>
      <div>Couple2 Name</div>
      <div>invite you to their special day</div>
      <div>Date</div>
      <div>Time</div>
      <div>Location</div>
      <div>RSVP by Deadline</div>
      <Link to="/guest-invite">
        <Button>Back to invite</Button>
      </Link>
    </Container>
    <Status />
    <NewRsvp />
  </Container>
);

export default RsvpForm;
