import React, { useState, useRef } from 'react';
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
  const [mainPhoto, setMainPhoto] = useState(
    'http://tineye.com/images/widgets/mona.jpg'
  );
  const [inviteMessage, setInviteMessage] = useState('');
  const [gallery, setGallery] = useState([]);

  const hiddenFileInput = useRef(null);

  const uploadMainPhoto = () => {
    hiddenFileInput.current.click();
  };

  const previewMainPhoto = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setMainPhoto(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const updateMessage = (e) => {
    setInviteMessage(e.target.value);
  };

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
      <img src={mainPhoto} alt="testing" width="100%" height="200" />
      <input
        type="file"
        ref={hiddenFileInput}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={previewMainPhoto}
      />
      <Button onClick={uploadMainPhoto}>Choose new photo</Button>
      <Form className="mt-3">
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" onChange={updateMessage} />
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

{
  /* <Card>
<Card.Body>
  <Card.Title>Main Photo</Card.Title>
  <Card.Img
    style={{ height: '11rem' }}
    variant="top"
    src="http://tineye.com/images/widgets/mona.jpg"
    alt="Main Photo"
  />
</Card.Body>
</Card> */
}
