import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function InvitationForm() {
  return (
    <>
      <h2>This is Invitaion Page</h2>
      <Link to="/rsvp-preview">
        <Button>Click me to Go to RSVP Page</Button>
      </Link>
    </>
  );
}
