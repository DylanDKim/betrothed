import React, { useState } from 'react';
import { Container, Row, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const { URL } = require('../../config/private.config');

const Status = ({ updateStep, updateData }) => {
  const [email, updateEmail] = useState('');
  const [errorShown, isError] = useState(false);

  const checkNextStep = () => {
    axios({
      method: 'get',
      url: `${URL}/events/61b79b9e0ac02dbe3e12fd1b/guests`,
      params: { email },
    })
      .then((results) => {
        updateData(results.data);
        if (results.data.rsvpStatus === 'pending') {
          updateStep('new');
        } else {
          updateStep('edit');
        }
      })
      .catch(() => {
        isError(true);
      });
  };

  return (
    <Container className="d-flex justify-content-center w-50 mt-3">
      <Row style={{ fontFamily: 'Merriweather' }}>
        <div>Check RSVP Status</div>
        <InputGroup className="d-flex justify-content-center">
          <InputGroup.Text onClick={checkNextStep}>
            <i className="fa fa-search" />
          </InputGroup.Text>
          <FormControl
            type="email"
            placeholder="enter email"
            onChange={(e) => updateEmail(e.target.value)}
          />
        </InputGroup>
        {errorShown && (
          <div className="text-muted">
            that email is not registered on the guest list
          </div>
        )}
      </Row>
    </Container>
  );
};

export default Status;
