import React from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Registry() {
  return (
    <>
      {' '}
      <Container>
        <Row style={{ height: '100vh' }}>
          <Col
            style={{ marginBottom: '30%' }}
            className="border d-flex align-items-center justify-content-center"
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
                Browse registry essentials, unique gifts, and more!
                <br />
                Mark your top picks so guests can easily find your favorites
                <br />
                Add gifts simply by adding the url
              </p>

              <Button className="mt-5 w-25">Next</Button>
            </Row>
          </Col>
          <Col sm={4} md={4}>
            <h1>3</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}
