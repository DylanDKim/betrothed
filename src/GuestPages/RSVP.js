import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  Form,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const RsvpForm = () => (
  <>
    <Container>Side Image??</Container>
    <Container>Couple1 Name</Container>
    <Container>&</Container>
    <Container>Couple2 Name</Container>
    <Container>invite you to their special day</Container>
    <Container>Date</Container>
    <Container>Time</Container>
    <Container>Location</Container>
    <Container>
      <Form>
        <Form.Group controlId="guestEmail">
          <Form.Label>Check RSVP Status</Form.Label>
          <Form.Control type="email" placeholder="enter email" />
        </Form.Group>
      </Form>
      <Link to="/guest-invite">
        <Button>Back to invite</Button>
      </Link>
    </Container>
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Attending</Form.Label>
          <Form.Select
            onChange={(e) => {
              console.log(e.target.value);
            }}
          >
            <option selected disabled>
              select from options
            </option>
            <option value="yes">Yes!</option>
            <option value="no">No</option>
          </Form.Select>
          <Form.Label>Message to the couple (optional)</Form.Label>
          <Form.Control as="textarea" placeholder="enter message" />
        </Form.Group>
      </Form>
      <Button
        onClick={() => {
          console.log('rsvping');
        }}
      >
        RSVP
      </Button>
    </Container>
  </>
);

export default RsvpForm;
