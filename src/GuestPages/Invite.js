import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Invite = () => (
  <>
    <Container>Invite Page!</Container>
    <Container>Main Image</Container>
    <Container>Couple1 Name</Container>
    <Container>&</Container>
    <Container>Couple2 Name</Container>
    <Container>Date</Container>
    <Container>Time</Container>
    <Container>Location</Container>
    <Link to="/rsvp-form">
      <Button>RSVP</Button>
    </Link>
    <Container>Message</Container>
    <Container>Registry</Container>
    <Container>Gallery</Container>
  </>
);

export default Invite;
