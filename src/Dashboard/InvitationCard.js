import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  PinkOpenCard,
  PinkFilledCard,
} from '../Common/styled/cardstyles/pinkcardstyle';
import {
  Faustina28,
  Faustina20,
} from '../Common/styled/textstyles/FaustinaDash';

export default function Dashboard(props) {
  const [invitationMade, setInvitationMade] = useState(true);
  return (
    <div>
      <Link to="/browse-theme" class="text-decoration-none">
        {invitationMade ? (
          <PinkOpenCard
            className="text-center"
            md="justify-content-center"
            style={{ color: '#ffb5cf', textDecoration: 'none', width: '18rem' }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <Faustina28 style={{ marginTop: '1em', fontSize: '28px' }}>
                    Invitation
                  </Faustina28>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Faustina20 style={{ marginTop: '5em' }}>
                    Customize your <br />
                    wedding website
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
                    browse themes
                  </Faustina20>
                </Col>
              </Row>

              {/* <Button>add guests</Button> */}
            </Card.Body>
          </PinkOpenCard>
        ) : (
          <PinkFilledCard
            className="text-center"
            style={{ color: '#ffb5cf', textDecoration: 'none', width: '18rem' }}
          >
            <Card.Body>
              <Row>
                <Col>
                  <Faustina28 style={{ marginTop: '1em' }}>
                    Invitation
                  </Faustina28>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Faustina20 style={{ marginTop: '5em' }}>
                    Your customized
                    <br />
                    invite has <br />
                    sent to guests
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
                    edit website
                  </Faustina20>
                </Col>
              </Row>

              {/* <Button>add guests</Button> */}
            </Card.Body>
          </PinkFilledCard>
        )}
      </Link>
    </div>
  );
}
