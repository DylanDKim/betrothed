import React from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BAlexBrush36 } from '../Common/styled/textstyles/AlexBrush36';

export default function BetrothedNavbar() {
  return (
    <>
      <Container>
        <Row>
          <Col md={{ offset: 0.5 }}>
            <BAlexBrush36>Betrothed</BAlexBrush36>
          </Col>
        </Row>
      </Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/guestlist">Guests</Nav.Link>
            <Nav.Link href="/invite">Invitation</Nav.Link>
            <Nav.Link href="/registryadd">Registry</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
