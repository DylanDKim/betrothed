import React, { useState } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';

import PlumButton from '../Common/styled/buttonstyles/PlumButton';

export default function ResgistryAdd() {
  const [registry, setRegistry] = useState([]);

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
          <PlumButton type="button" className="float-right">
            add gifts
          </PlumButton>
        </Col>
      </Row>
      <Row>
        <h2
          style={{
            fontSize: '24px',
            fontFamily: 'Faustina serif',
          }}
        >
          Your Top Gifts
        </h2>
        {registry.length === 0 ? (
          <h3>
            You have {registry.length} gifts in your registry! Try adding some.
          </h3>
        ) : (
          <h3>You have 5 gifts in your registry! Try adding some.</h3>
        )}

        <button
          type="button"
          onClick={() => setRegistry([...registry, 'five'])}
        >
          Click
        </button>
      </Row>
      <Row>
        <h2
          style={{
            fontSize: '24px',
            fontFamily: 'Faustina serif',
          }}
        >
          Browse by category
        </h2>
      </Row>
      <Row>
        <h2
          style={{
            fontSize: '24px',
            fontFamily: 'Faustina serif',
          }}
        >
          Claimed
        </h2>
      </Row>
    </Container>
  );
}
