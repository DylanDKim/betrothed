import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Registry() {
  return (
    <>
      {' '}
      <Container>
        <Row>
          <Col sm={8} md={8}>
            <Row className="mt-5">
              <h1 style={{ fontFamily: 'Faustina serif' }}>Registry</h1>
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
