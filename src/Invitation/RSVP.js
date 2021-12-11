import React from 'react';
import { Link } from 'react-router-dom';

export default function Hello() {
  return (
      <React.Fragment>
        <h2>This is RSVP Page</h2>
        <Link to='/invite'>
          <button>Click me to Go to Invitation Page</button>
        </Link>
    </React.Fragment>
  );
}