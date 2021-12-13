import React from 'react';
import { Link } from 'react-router-dom';
import {
  ProgressBar,
  Container,
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

export default function BrowseTheme() {
  return (
    <Container>
      <Row>
        <Col>
          <ProgressBar now={50} />
          <h2>Wedding Website</h2>
          <h2>Welcome to your Wedding Website</h2>
          <h5>Customize your invitation with themes and colors</h5>
          <h5>Add a cover photo and fill your gallery</h5>
          <h5>Write a personal message for your guests</h5>
          <Link to="/choose-content">
            <Button>browse themes</Button>
          </Link>
        </Col>
        <Col>
          <Image
            src="http://tineye.com/images/widgets/mona.jpg"
            fluid
            style={{ height: '100%' }}
          />
        </Col>
      </Row>
    </Container>
  );
}
