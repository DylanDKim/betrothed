import React, { useState } from 'react';
import { Container, Row, Button, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewRsvp = ({ updateStep }) => {
  const [isAttending, updateAttendance] = useState(null);
  const [message, updateMessage] = useState('');
  const [responseConfirmed, updateResponse] = useState(false);

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
    updateResponse(true);
  };

  return responseConfirmed ? (
    <h2>
      Thank you for your response! You may adjust your response before the
      deadline.
    </h2>
  ) : (
    <Container className="w-100" style={{ fontFamily: 'Merriweather' }}>
      <Alert className="d-flex justify-content-center" variant="danger">
        You have not RSVPd yet
      </Alert>
      <Form className="d-flex justify-content-center align-items-end">
        <Form.Group className="w-50">
          <Form.Label className="text-muted mb-0">Attending</Form.Label>
          <Form.Select onChange={checkReply}>
            <option selected disabled>
              select from options
            </option>
            <option value="yes">Yes!</option>
            <option value="no">No</option>
          </Form.Select>
          <Form.Label className="text-muted mb-0 mt-4">
            Message to the couple (optional)
          </Form.Label>
          <Form.Control
            as="textarea"
            placeholder="enter message"
            onChange={(e) => updateMessage(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button
        className="d-flex justify-content-center text-center w-25"
        onClick={submitRSVP}
      >
        RSVP
      </Button>
    </Container>
  );
};

export default NewRsvp;
