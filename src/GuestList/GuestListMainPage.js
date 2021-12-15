import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const GuestListMainPage = () => (
  <Container>
    <h1>Guest List</h1>
    {/* change to dashboard link when available */}
    <Link to="/sometest">
      <Button>Back to Dashboard</Button>
    </Link>
    <Button>Add Guest</Button>
  </Container>
);

export default GuestListMainPage;
