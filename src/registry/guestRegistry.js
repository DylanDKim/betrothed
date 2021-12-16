import React from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlumButton from '../Common/styled/buttonstyles/PlumButton';

export default function GuestRegistry() {
  return (
    <Container style={{ border: '1px solid black' }}>
      <Row>
        <Col>
          <Card style={{ width: '18rem', border: '5px solid #8b5b6e' }}>
            <Card.Body>
              <Card.Title
                style={{ fontSize: '24px', fontFamily: 'Faustina, serif' }}
              >
                Laptop
              </Card.Title>
              <Card.Text
                style={{ fontSize: '18px', fontFamily: 'Merriwether, serif' }}
              >
                Lenovo Ideapad 3 15.6" Touch Screen Laptop
              </Card.Text>
              <PlumButton
                className="float-right"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    'https://www.bestbuy.com/site/lenovo-ideapad-3-15-6-touch-screen-laptop-intel-core-i3-8gb-memory-256gb-ssd-almond/6461981.p?skuId=6461981',
                    '_blank'
                  );
                }}
                style={{ float: 'right' }}
                variant="primary"
              >
                Claim
              </PlumButton>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', border: '5px solid #8b5b6e' }}>
            <Card.Body>
              <Card.Title
                style={{ fontSize: '24px', fontFamily: 'Faustina, serif' }}
              >
                Blender
              </Card.Title>
              <Card.Text
                style={{ fontSize: '18px', fontFamily: 'Merriwether, serif' }}
              >
                Ninja - Professional Plus Kitchen System with Auto-iQ
              </Card.Text>
              <PlumButton
                className="float-right"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    'https://www.bestbuy.com/site/ninja-professional-plus-kitchen-system-with-auto-iq-black-stainless-steel/6395884.p?skuId=6395884',
                    '_blank'
                  );
                }}
                style={{ float: 'right' }}
                variant="primary"
              >
                Claim
              </PlumButton>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', border: '5px solid #8b5b6e' }}>
            <Card.Body>
              <Card.Title
                style={{ fontSize: '24px', fontFamily: 'Faustina, serif' }}
              >
                Drip
              </Card.Title>
              <Card.Text
                style={{ fontSize: '18px', fontFamily: 'Merriwether, serif' }}
              >
                コラボウェディングドレスが完成いたしました。
              </Card.Text>
              <PlumButton
                className="float-right"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    'http://www.mariarosa.co.jp/sailormoon/#SLM0006%20Blue-1',
                    '_blank'
                  );
                }}
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
