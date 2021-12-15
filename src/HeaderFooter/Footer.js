import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { WAlexBrush36 } from '../Common/styled/textstyles/AlexBrush36';
import { WMerr18 } from '../Common/styled/textstyles/Merr18';

export default function Onboarding2(props) {
  const [weddingDate, setWeddingDate] = useState('');

  return (
    <Container fluid style={{ backgroundColor: '#8b5b6e', height: '10em' }}>
      <Row>
        <Col md={{ span: 3, offset: 8 }}>
          <WAlexBrush36>Betrothed</WAlexBrush36>
          <WMerr18>Made with care by the 4Billy Team</WMerr18>
          <WMerr18>https://github.com/4billy</WMerr18>
        </Col>
      </Row>
    </Container>
  );
}
