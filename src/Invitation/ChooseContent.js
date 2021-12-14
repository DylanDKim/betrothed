import React from 'react';
import { Link } from 'react-router-dom';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';
import {
  Container,
  ProgressBar,
  Row,
  Col,
  Card,
  CardGroup,
  Image,
  Form,
  Stack,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChooseContent() {
  return (
    <Container className="mt-5">
      <ProgressBar now={100} />
      <h2>Hello from ChooseContent</h2>
      <Link to="/invite">
        <BlueButton>Content</BlueButton>
      </Link>
    </Container>
  );
}
