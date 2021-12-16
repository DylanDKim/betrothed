import React, { useState } from 'react';
import { Container, Row, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const { URL } = require('../../config/private.config');

const dummyData = {
  'guest_four@domain.com': {
    _id: '61b7b1edda2ddaf0d73c5acc',
    firstName: 'Guest',
    lastName: 'Four',
    email: 'guest_four@domain.com',
    rsvpStatus: 'attending',
    group: 'Four Family',
    event: '61b79b9e0ac02dbe3e12fd1b',
    __v: 0,
    rsvpLastUpdated: '2021-12-13T20:50:25.986Z',
    rsvpNote: "Thanks for the invite! I'll be there.",
  },
  'guest_three@domain.com': {
    _id: '61b7acb5da2ddaf0d73c5aae',
    firstName: 'Guest',
    lastName: 'Three',
    email: 'guest_three@domain.com',
    rsvpStatus: 'pending',
    group: 'Three Family',
    event: '61b79b9e0ac02dbe3e12fd1b',
    __v: 0,
  },
};

const Status = ({ updateStep, updateData }) => {
  const [email, updateEmail] = useState('');

  const checkNextStep = () => {
    // axios({
    //   method: 'get',
    //   url: `${URL}/events/61b79b9e0ac02dbe3e12fd1b/guests`,
    //   params: { email },
    //   headers: { 'Access-Control-Allow-Origin': '*' },
    // })
    //   .then((results) => {
    //     console.log(results);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    if (dummyData[email] === undefined) {
      console.log('email not foun in list');
    } else if (dummyData[email].rsvpStatus === 'pending') {
      updateData(dummyData[email]);
      updateStep('new');
    } else {
      updateData(dummyData[email]);
      updateStep('edit');
    }
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
      </Row>
    </Container>
  );
};

export default Status;
