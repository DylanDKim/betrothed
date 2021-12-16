import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoRsvp from './InfoRSVP';

const Invite = () => (
  <>
    <img
      src="https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-133803155.jpg"
      alt="main wedding spalsh"
      style={{
        width: '100vw',
        height: '65vh',
        overflow: 'hidden',
        objectFit: 'cover',
        margin: 0,
      }}
    />
    <Container fluid>
      <InfoRsvp onSameLine={false} />

      <Link to="/rsvp-form" className="d-flex justify-content-center">
        <Button>RSVP</Button>
      </Link>
      <h2 className="d-flex justify-content-center">Message</h2>
      <h2 className="d-flex justify-content-center">Registry</h2>
      <h2 className="d-flex justify-content-center">Gallery</h2>
    </Container>
  </>
);

export default Invite;
