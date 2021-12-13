import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Onboarding4(props) {
  return (
    <div>
      <div>
        <h2>
          Sounds fun! While we&apos;re talking about guests, {'\n'}a wedding
          website is the best way {'\n'}
          to keep them in the loop
        </h2>
        <h2>
          Share your registry, rsvp, and more! Get started {'\n'}
          on yours when you&apos;re ready
        </h2>
        <Link to="/onboarding-5">
          <Button>Next</Button>
        </Link>
      </div>
      <div>Right side image placeholder</div>
    </div>
  );
}
