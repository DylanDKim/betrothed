import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlumButton from '../Common/styled/buttonstyles/PlumButton';

export default function GuestRegistry() {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title
                style={{ fontSize: '24px', fontFamily: 'Faustina, serif' }}
              >
                TV
              </Card.Title>
              <Card.Text
                style={{ fontSize: '18px', fontFamily: 'Merriwether, serif' }}
              >
                Something
              </Card.Text>
              <PlumButton
                className="float-right"
                style={{ float: 'right' }}
                variant="primary"
              >
                Claim
              </PlumButton>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title
                style={{ fontSize: '24px', fontFamily: 'Faustina, serif' }}
              >
                Blender
              </Card.Title>
              <Card.Text
                style={{ fontSize: '18px', fontFamily: 'Merriwether, serif' }}
              >
                Something
              </Card.Text>
              <PlumButton
                className="float-right"
                style={{ float: 'right' }}
                variant="primary"
              >
                Claim
              </PlumButton>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title
                style={{ fontSize: '24px', fontFamily: 'Faustina, serif' }}
              >
                Drip
              </Card.Title>
              <Card.Text
                style={{ fontSize: '18px', fontFamily: 'Merriwether, serif' }}
              >
                Something
              </Card.Text>
              <PlumButton
                className="float-right"
                style={{ float: 'right' }}
                variant="primary"
              >
                Claim
              </PlumButton>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
