import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
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

export default function InvitationForm() {
  const [mainPhoto, setMainPhoto] = useState('');

  const updateMainPhoto = () => {};

  return (
    <Container style={{ width: '65%' }}>
      <h2>Your Wedding Website</h2>
      <Stack direction="horizontal" gap={3}>
        <Button className="btn btn-success border ms-auto">
          Share your website
        </Button>
        <Link to="/rsvp-preview">
          <Button variant="danger border">Preview Site</Button>
        </Link>
      </Stack>
      <Form className="mt-3">
        <Card>
          <Card.Body>
            <Card.Title>Main Photo</Card.Title>
            <Card.Img
              style={{ height: '11rem' }}
              variant="top"
              src={mainPhoto}
              alt="Main Photo"
            />
            <Button variant="primary">Choose new photo</Button>
          </Card.Body>
        </Card>
        <Form.Group className="mb-3" controlId="formMainPhot">
          <Form.Label>Choose new photo</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="http://tineye.com/images/widgets/mona.jpg"
            />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="http://tineye.com/images/widgets/mona.jpg"
            />
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="http://tineye.com/images/widgets/mona.jpg"
            />
          </Card>
        </CardGroup>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
}
