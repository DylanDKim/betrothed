import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ProgressBar,
  Row,
  Col,
  Card,
  CardGroup,
  Image,
  Form,
  Button,
  Stack,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChooseContent() {
  return (
    <Container>
      <ProgressBar now={100} />
      <h2>Hello from ChooseContent</h2>
      <Link to="/invite">
        <Button>Content</Button>
      </Link>
    </Container>
  );
}
