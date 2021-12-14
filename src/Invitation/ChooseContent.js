import React from 'react';
import { Link } from 'react-router-dom';
import { Container, ProgressBar } from 'react-bootstrap';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChooseContent() {
  return (
    <Container className="mt-5">
      <ProgressBar now={100} />
      <h2>Hello from ChooseContent</h2>
      <Link to="/invitation-form">
        <BlueButton>Content</BlueButton>
      </Link>
    </Container>
  );
}
