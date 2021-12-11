import React from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Registry() {
  return (
    <Container fluid>
      <Row style={{ height: '100vh', marginLeft: '15%' }}>
        <Col
          style={{ marginBottom: '20%' }}
          className="d-flex align-items-center justify-content-center"
          sm={8}
          md={8}
        >
          <Row>
            <h1 style={{ fontSize: '12px' }}>Progress bar holder</h1>
            <h1 style={{ fontSize: '64px', fontFamily: 'Alex Brush' }}>
              Registry
            </h1>
            <h2 style={{ fontSize: '24px', fontFamily: 'Faustina serif' }}>
              Welcome to your registry!
            </h2>
            <p style={{ fontSize: '18px', fontFamily: 'Merriweather' }}>
              <i className="fas fa-gift" /> Browse registry essentials, unique
              gifts, and more!
              <br />
              <i className="far fa-star" /> Mark your top picks so guests can
              easily find your favorites
              <br />
              <i className="fas fa-mouse-pointer" /> Add gifts simply by adding
              the url
            </p>

            <Button className="mt-5 w-25">Next</Button>
          </Row>
        </Col>
        <Col style={{ overflow: 'hidden', height: '100vh' }} sm={4} md={4}>
          <img
            src="https://images.unsplash.com/photo-1588279102819-f4520e40b1c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="Pots and pans"
          />
        </Col>
      </Row>
    </Container>
  );
}
