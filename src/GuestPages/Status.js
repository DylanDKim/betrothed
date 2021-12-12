import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Status = () => {
  const [email, updateEmail] = useState('');

  return (
    <Form>
      <Form.Group controlId="guestEmail">
        <Form.Label>
          <Button onClick={() => console.log(email)}>Check RSVP Status</Button>
        </Form.Label>
        <Form.Control
          type="email"
          placeholder="enter email"
          onChange={(e) => updateEmail(e.target.value)}
        />
      </Form.Group>
    </Form>
  );
};

export default Status;
