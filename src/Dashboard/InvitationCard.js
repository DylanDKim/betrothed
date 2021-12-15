import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BlueOpenCard,
  BlueFilledCard,
} from '../Common/styled/cardstyles/bluecardstyle';

export default function Dashboard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Invitation</Card.Title>
        <h3>Customize your wedding website</h3>
        <Link to="/browse-theme">
          <Button>browse themes</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
