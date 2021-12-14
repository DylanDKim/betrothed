import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Form, Alert, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditRsvp = ({ updateStep }) => {
  const [isEditing, enableEdits] = useState(false);
  const [isAttending, updateAttendance] = useState(null);
  const [message, updateMessage] = useState('');

  const checkReply = (e) => {
    if (e.target.value === 'yes') {
      updateAttendance('attending');
    } else {
      updateAttendance('not attending');
    }
  };

  const editRSVP = () => {
    console.log(isAttending);
    console.log(message);
    console.log('submitting!');
    updateStep('status');
  };

  return (
    <Container className="w-100">
      <Alert className="d-flex justify-content-center" variant="warning">
        You have already RSVP'd
      </Alert>
      <Form className="d-flex justify-content-center align-items-end">
        <Form.Group className="w-50">
          <Form.Label className="text-muted mb-0">Attending</Form.Label>
          <Form.Select disabled={!isEditing} onChange={checkReply}>
            <option selected disabled>
              select from options
            </option>
            <option value="yes">Yes!</option>
            <option value="no">No</option>
          </Form.Select>
          <Form.Control as="text" disabled={!isEditing}>
            Yes!
          </Form.Control>
          <Form.Label className="text-muted mb-0 mt-4">
            Message to the couple (optional)
          </Form.Label>
          <Form.Control
            as="textarea"
            placeholder="enter message"
            disabled={!isEditing}
            onChange={(e) => updateMessage(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Button
        className="d-flex justify-content-center text-center w-25"
        onClick={editRSVP}
      >
        RSVP
      </Button>
    </Container>
  );
};

export default EditRsvp;
