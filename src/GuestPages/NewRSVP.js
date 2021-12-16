import React, { useState } from 'react';
import { Container, Row, Button, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Success from './Success';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';
import updateRSVP from './utils/updateRSVP';

const { URL } = require('../../config/private.config');

const NewRsvp = ({ updateStep, rsvpData }) => {
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
    if (isAttending === null) {
      alert('Please select one of the options for attending');
    } else {
      updateRSVP(isAttending, message, rsvpData._id, updateResponse);
    }
  };

  return responseConfirmed ? (
    <Success />
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
      <div className="d-flex justify-content-center mt-3">
        <PlumFilledButton
          className="d-flex justify-content-center text-center w-25"
          onClick={submitRSVP}
        >
          RSVP
        </PlumFilledButton>
      </div>
    </Container>
  );
};

export default NewRsvp;
