import React, { useState } from 'react';
import { Container, Button, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewRsvp = () => {
  const [isAttending, updateAttendance] = useState(null);
  const [message, updateMessage] = useState('');

  const checkReply = (e) => {
    if (e.target.value === 'yes') {
      updateAttendance('attending');
    } else {
      updateAttendance('not attending');
    }
  };

  const submitRSVP = () => {
    console.log(isAttending);
    console.log(message);
    console.log('submitting!');
  };

  return (
    <Container fluid>
      <Alert variant="danger">You have not RSVPd yet</Alert>
      <Form>
        <Form.Group>
          <Form.Label>Attending</Form.Label>
          <Form.Select onChange={checkReply}>
            <option selected disabled>
              select from options
            </option>
            <option value="yes">Yes!</option>
            <option value="no">No</option>
          </Form.Select>
          <Form.Label>Message to the couple (optional)</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="enter message"
            onChange={(e) => updateMessage(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button onClick={submitRSVP}>RSVP</Button>
    </Container>
  );
};

export default NewRsvp;
