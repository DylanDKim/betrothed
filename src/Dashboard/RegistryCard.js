import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function InvitationCard(props) {
  const [attending, setAttending] = useState(0);

  return (
    <div>
      <div>
        <h3>Guest List</h3>
      </div>
      <div>
        {attending === 0 ? (
          <h3>No guests have been invited yet</h3>
        ) : (
          <h3>
            {attending} {'\n'} guests are attending
          </h3>
        )}
      </div>
      <Link to="/dashboard">
        <Button>add guests</Button>
      </Link>
    </div>
  );
}
