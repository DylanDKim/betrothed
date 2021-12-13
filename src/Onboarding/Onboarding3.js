import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Onboarding3(props) {
  const [guestCount, setGuestCount] = useState('');

  return (
    <div>
      <div>
        <h2>What is your estimated guest count?</h2>
        <h2>We plan to invite</h2>
        <input
          type="number"
          required
          value={guestCount}
          onChange={(e) => setGuestCount(e.target.value)}
          placeholder="number"
        />
        <h2>guests</h2>
        <Link to="/onboarding-4">
          <Button>Next</Button>
        </Link>
      </div>
      <div>Right side image placeholder</div>
    </div>
  );
}
