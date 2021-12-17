import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { WAlexBrush36 } from '../Common/styled/textstyles/AlexBrush36';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';
import WhiteButton from '../Common/styled/buttonstyles/WhiteButton';
import BlueInput from '../Common/styled/inputstyles/inputstyle';
import WhiteInput from '../Common/styled/inputstyles/whiteinput';

export default function Landing(props) {
  // const [email, setEmail] = useState('');

  return (
    <Container fluid md="d-flex jusitfy-content-center">
      <Row>
        <Col>
          <div
            style={{
              position: 'relative',
              textAlign: 'center',
              color: 'white',
              backgroundColor: 'black',
              width: '100%',
              height: '90%',
            }}
          >
            <Image
              fluid
              src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              alt="newlywed in field"
              style={{
                position: 'relative',
                overflow: 'hidden',
                width: '100%',
                height: '100vh',
                objectFit: 'cover',
              }}
            />
            <BAlexBrushH1
              style={{
                position: 'absolute',
                marginTop: '0.5em',
                top: '33%',
                left: '38%',
                fontSize: '108px',
              }}
            >
              Betrothed
            </BAlexBrushH1>
            <input
              style={{
                position: 'absolute',
                marginTop: '2em',
                display: 'flex',
                top: '57%',
                left: '40%',
                backgroundColor: 'transparent',
                color: 'white',
                borderColor: 'transparent',
                fontSize: '24px',
                textAlign: 'center',
                width: '13em',
              }}
              type="email"
              required
              value={props.vEmail}
              onChange={(e) => props.cEmail(e.target.value)}
              placeholder="your email address"
            />
            <Link
              to="/onboarding-1"
              style={{
                textDecoration: 'none',
                position: 'absolute',
                marginTop: '2em',
                display: 'flex',
                top: '67%',
                left: '44%',
              }}
            >
              <WAlexBrush36 style={{ textDecoration: 'none' }}>
                Get Started
              </WAlexBrush36>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
