import React from 'react';
import { Link } from 'react-router-dom';

export default function InvitationForm() {
  return (
    <React.Fragment>
      <h2>This is InvitaionForm Page</h2>
      <Link to='/rsvp'>
        <button>Click me to Go to RSVP Page</button>
      </Link>
    </React.Fragment>
  );
}