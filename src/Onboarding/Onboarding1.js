import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Onboarding1(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [partnerFirstName, setPartnerFirstName] = useState('');
  const [partnerLastName, setPartnerLastName] = useState('');

  return (
    <div>
      <div>
        <h1>Congratulations</h1>
        <h2>
          Tell us about yourself so we can
          {'\n'}customize your planning experience.
        </h2>
        <h2>My name is</h2>
        <input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <h2>And my partner&apos;s name is</h2>
        <input
          type="text"
          required
          value={partnerFirstName}
          onChange={(e) => setPartnerFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          required
          value={partnerLastName}
          onChange={(e) => setPartnerLastName(e.target.value)}
          placeholder="Last Name"
        />
        <Link to="/onboarding-2">
          <Button>Next</Button>
        </Link>
      </div>
      <div>Right side image placeholder</div>
    </div>
  );
}
