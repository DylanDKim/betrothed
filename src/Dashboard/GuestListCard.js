import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BlueOpenCard,
  BlueFilledCard,
} from '../Common/styled/cardstyles/bluecardstyle';
import {
  Faustina28,
  Faustina20,
} from '../Common/styled/textstyles/FaustinaDash';

export default function Dashboard(props) {
  const [numGuests, setNumGuests] = useState(0);

  return (
    <div>
      <Link to="/guestlist" class="text-decoration-none">
        {numGuests === 0 ? (
          <BlueOpenCard
            className="text-center"
            md="justify-content-center"
            style={{ color: '#90b0c5', textDecoration: 'none', width: '18rem' }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <Faustina28 style={{ marginTop: '1em', fontSize: '28px' }}>
                    Guest List
                  </Faustina28>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Faustina20 style={{ marginTop: '5em' }}>
                    No guests have <br />
                    been invited yet
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
                    add guests
                  </Faustina20>
                </Col>
              </Row>

              {/* <Button>add guests</Button> */}
            </Card.Body>
          </BlueOpenCard>
        ) : (
          <BlueFilledCard
            className="text-center"
            style={{ color: '#90b0c5', textDecoration: 'none', width: '18rem' }}
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
                    {numGuests}
                  </Faustina28>
                  <Faustina20>
                    guests are <br />
                    attending
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
                    view guest list
                  </Faustina20>
                </Col>
              </Row>

              {/* <Button>add guests</Button> */}
            </Card.Body>
          </BlueFilledCard>
        )}
      </Link>
    </div>
  );
}
