import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoRsvp from './InfoRSVP';

const Invite = () => (
  <Container fluid>
    <InfoRsvp onSameLine={false} />
    <Link to="/rsvp-form">
      <Button>RSVP</Button>
    </Link>
    <h2>Message</h2>
    <h2>Registry</h2>
    <h2>Gallery</h2>
  </Container>
);

export default Invite;
