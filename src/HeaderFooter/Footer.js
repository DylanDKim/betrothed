import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Onboarding2(props) {
  const [weddingDate, setWeddingDate] = useState('');

  return (
    <Container fluid style={{ backgroundColor: '#8b5b6e', height: '10em' }}>
      <div>
        <h1>Betrothed</h1>
        <h3>Made with care by the 4Billy Team</h3>
        <h3>https://github.com/4billy</h3>
      </div>
    </Container>
  );
}
