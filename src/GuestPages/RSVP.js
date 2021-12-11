import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <Link to="/guest-invite">
      <Button>Back to invite</Button>
    </Link>
  </>
);

export default RsvpForm;
