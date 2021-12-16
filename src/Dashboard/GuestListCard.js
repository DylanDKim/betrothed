import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BlueOpenCard,
  BlueFilledCard,
} from '../Common/styled/cardstyles/bluecardstyle';

export default function Dashboard(props) {
  const [numGuests, setNumGuests] = useState(0);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Guest List</Card.Title>
        {numGuests === 0 ? (
          <h3>No guests have been invited yet</h3>
        ) : (
          <h3>
            {numGuests} <br /> are attending
          </h3>
        )}
        <Link to="/guestlist">
          <Button>add guests</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
