import React, { useState } from 'react';
import { Container, Row, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Status = ({ updateStep }) => {
  const [email, updateEmail] = useState('');

  const checkNextStep = () => {
    console.log(email);
    updateStep('new');
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
