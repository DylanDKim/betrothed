import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Onboarding4(props) {
  const [rsvpBy, setRsvpBy] = useState('');

  return (
    <div>
      <div>
        <h2>Lastly, when should guests RSVP by?</h2>
        <h2>Finalize guest list by</h2>
        <input
          type="number"
          required
          value={rsvpBy}
          onChange={(e) => setRsvpBy(e.target.value)}
          placeholder="date"
        />
        <Link to="/dashboard">
          <Button>see your dashboard</Button>
        </Link>
      </div>
      <div>Right side image placeholder</div>
    </div>
  );
}
