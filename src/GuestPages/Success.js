import React from 'react';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Success = () => (
  <Alert
    variant="success"
    className="d-flex justify-content-center"
    style={{ fontFamily: 'Faustina seirf', fontStyle: 'italic' }}
  >
    Thank you for your response! You may adjust your response before the
    deadline.
  </Alert>
);

export default Success;
