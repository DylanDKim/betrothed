import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function InvitationForm() {
  return (
    <React.Fragment>
      <h2>This is InvitaionForm Page</h2>
      <Link to='/rsvp'>
        <Button>Click me to Go to RSVP Page</Button>
      </Link>
    </React.Fragment>
  );
}