import React from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlumButton from '../Common/styled/buttonstyles/PlumButton';

export default function ResgistryStart() {
  return (
    <Container fluid>
      <Row className="mt-5">
        <h1 style={{ fontSize: '64px', fontFamily: 'Alex Brush' }}>Registry</h1>
        <h2 style={{ fontSize: '24px', fontFamily: 'Faustina serif' }}>
          Try adding some of our couple’s favorite gifts!
        </h2>
      </Row>
      <br />
      <Row>
        <h2 style={{ fontSize: '24px', fontFamily: 'Faustina serif' }}>
          Popular Gifts
        </h2>
      </Row>
      <Row>
        <h2 style={{ fontSize: '24px', fontFamily: 'Faustina serif' }}>
          Registry Essentials
        </h2>
      </Row>
      <Row
        className="d-flex"
        style={{
          border: '1px solid black',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        0 Gifts Added
        <span className="float-right" style={{ marginLeft: '150%' }}>
          <PlumButton
            style={{ fontSize: '24px' }}
            className="mb-4"
            type="button"
          >
            Discover More Gifts
          </PlumButton>
        </span>
      </Row>
    </Container>
  );
}
