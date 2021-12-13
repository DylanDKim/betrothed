import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Onboarding2(props) {
  const [weddingDate, setWeddingDate] = useState('');

  return (
    <div>
      <div>
        <h2>When is the big day?</h2>
        <input
          type="text"
          required
          value={weddingDate}
          onChange={(e) => setWeddingDate(e.target.value)}
          placeholder="Wedding Date"
        />
        <Link to="/onboarding-3">
          <Button>Next</Button>
        </Link>
      </div>
      <div>Right side image placeholder</div>
    </div>
  );
}
