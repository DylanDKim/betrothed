import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  PlumOpenCard,
  PlumFilledCard,
} from '../Common/styled/cardstyles/plumcardstyle';
import {
  Faustina28,
  Faustina20,
} from '../Common/styled/textstyles/FaustinaDash';

export default function RegistryCard(props) {
  const { event_id: eventId } = useParams();
  const link = `/event/${eventId}/registrystart`;
  return (
    <div>
      <Link to={link} class="text-decoration-none">
        {props.numGifts === 0 ? (
          <PlumOpenCard
            className="text-center"
            md="justify-content-center"
            style={{ color: '#8b5b6e', textDecoration: 'none', width: '18rem' }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <Faustina28
                    style={{
                      marginTop: '1em',
                      fontSize: '28px',
                    }}
                  >
                    Registry
                  </Faustina28>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Faustina20 style={{ marginTop: '5em', color: '#8b5b6e' }}>
                    no gifts have <br />
                    been added
                  </Faustina20>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Faustina20
                    style={{
                      marginTop: '6em',
                      textDecoration: 'underline',
                      color: '#5f7483',
                    }}
                  >
                    build your registry
                  </Faustina20>
                </Col>
              </Row>

              {/* <Button>add guests</Button> */}
            </Card.Body>
          </PlumOpenCard>
        ) : (
          <PlumFilledCard
            className="text-center"
            style={{ color: '#8b5b6e', textDecoration: 'none', width: '18rem' }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <Faustina28 style={{ marginTop: '1em' }}>Registry</Faustina28>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Faustina28 style={{ marginTop: '2.5em', fontSize: '42px' }}>
                    {props.numGifts}
                  </Faustina28>
                  <Faustina20>
                    items are <br />
                    claimed
                  </Faustina20>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Faustina20
                    style={{
                      marginTop: '5.5em',
                      textDecoration: 'underline',
                      color: '#5f7483',
                    }}
                  >
                    manage registry
                  </Faustina20>
                </Col>
              </Row>

              {/* <Button>add guests</Button> */}
            </Card.Body>
          </PlumFilledCard>
        )}
      </Link>
    </div>
  );
}
