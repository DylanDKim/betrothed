import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Hello() {
  return (
    <>
      <h2>This is RSVP Page</h2>
      <Link to='/invite'>
        <Button>Click me to Go to Invitation Page</Button>
      </Link>
    </>
  );
}
