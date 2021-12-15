import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BAlexBrush36 } from '../Common/styled/textstyles/AlexBrush36';

export default function BetrothedNavbar() {
  return (
    <>
      <BAlexBrush36 style={{ marginLeft: '2em' }}>Betrothed</BAlexBrush36>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/guestlist">Guests</Nav.Link>
            <Nav.Link href="/invite">Invitation</Nav.Link>
            <Nav.Link href="/registry">Registry</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
