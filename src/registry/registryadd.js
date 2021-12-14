import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';

export default function ResgistryAdd() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <h1 style={{ fontSize: '64px', fontFamily: 'Alex Brush' }}>
            Registry
          </h1>
        </Col>
        <Col md={3} className="mr-1 pr-1">
          <div style={{ float: 'right' }}>
            <h2
              style={{
                fontSize: '24px',
                fontFamily: 'Faustina serif',
              }}
            >
              0 Gifts Requested
            </h2>
            0 Purchased
          </div>
        </Col>
        <Col md={3} className="ml-1">
          <PlumFilledButton type="button" className="float-right">
            add gifts
          </PlumFilledButton>
        </Col>
      </Row>
    </Container>
  );
}
