import React, { useState } from 'react';
import { Container, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Status = () => {
  const [email, updateEmail] = useState('');

  return (
    <Container fluid>
      <div>Check RSVP Status</div>
      <InputGroup>
        <InputGroup.Text onClick={() => console.log(email)}>
          Search
        </InputGroup.Text>
        <FormControl
          type="email"
          placeholder="enter email"
          onChange={(e) => updateEmail(e.target.value)}
        />
      </InputGroup>
    </Container>
  );
};

export default Status;
