import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewRsvp from './NewRSVP';

const RsvpForm = () => (
  <>
    <Container>Side Image??</Container>
    <Container>Couple1 Name</Container>
    <Container>&</Container>
    <Container>Couple2 Name</Container>
    <Container>invite you to their special day</Container>
    <Container>Date</Container>
    <Container>Time</Container>
    <Container>Location</Container>
    <Container>
      <Form>
        <Form.Group controlId="guestEmail">
          <Form.Label>Check RSVP Status</Form.Label>
          <Form.Control type="email" placeholder="enter email" />
        </Form.Group>
      </Form>
      <Link to="/guest-invite">
        <Button>Back to invite</Button>
      </Link>
    </Container>
    <NewRsvp />
  </>
);

export default RsvpForm;
