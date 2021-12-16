import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

export default function Dashboard(props) {
  const [numGifts, setNumGifts] = useState(0);

  return (
    <div>
      <Link to="/guestlist" class="text-decoration-none">
        {numGifts === 0 ? (
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
                  <Faustina28 style={{ marginTop: '1em' }}>
                    Guest List
                  </Faustina28>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Faustina28 style={{ marginTop: '1.5em', fontSize: '42px' }}>
                    {numGifts}
                  </Faustina28>
                  <Faustina20>
                    items are <br />
                    unclaimed
                  </Faustina20>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Faustina20
                    style={{
                      marginTop: '5em',
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
