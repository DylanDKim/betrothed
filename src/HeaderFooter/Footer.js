import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Onboarding2(props) {
  const [weddingDate, setWeddingDate] = useState('');

  return (
    <div>
      <div>
        <h1>Betrothed</h1>
        <h3>Made with care by the 4Billy Team</h3>
        <h3>https://github.com/4billy</h3>
        <Button>back to top</Button>
      </div>
    </div>
  );
}
