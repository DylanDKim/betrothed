import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import PlumButton from '../Common/styled/buttonstyles/PlumButton';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';
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
  const [galleryURL, setGalleryURL] = useState([
    'http://tineye.com/images/widgets/mona.jpg',
    'http://tineye.com/images/widgets/mona.jpg',
    'http://tineye.com/images/widgets/mona.jpg',
  ]);

  const galleryArray = [];

  const hiddenMainPhotoInput = useRef(null);
  const hiddenGalleryInput = useRef(null);

  const uploadMainPhoto = () => {
    hiddenMainPhotoInput.current.click();
  };
  const addPicToGallery = () => {
    hiddenGalleryInput.current.click();
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

  const previewGallery = (e) => {
    const selectedPhotos = e.target.files;
    for (let i = 0; i < selectedPhotos.length; i++) {
      galleryArray.push(URL.createObjectURL(selectedPhotos[i]));
    }
    setGalleryURL([...galleryURL, ...galleryArray]);
  };

  return (
    <Container style={{ width: '65%' }}>
      <h2>Your Wedding Website</h2>
      <Stack className="mb-5" direction="horizontal" gap={3}>
        <PlumButton className="ms-auto">Share your website</PlumButton>
        <Link to="/rsvp-preview">
          <PlumFilledButton variant="border">Preview Site</PlumFilledButton>
        </Link>
      </Stack>
      <img src={mainPhoto} alt="mainPhoto" width="100%" height="200" />
      <input
        type="file"
        ref={hiddenMainPhotoInput}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={previewMainPhoto}
      />
      <PlumButton onClick={uploadMainPhoto}>Choose new photo</PlumButton>
      <Form className="mt-3">
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" onChange={updateMessage} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <CardGroup>
            {(galleryURL || []).map((url) => (
              <Card>
                <Card.Img src={url} alt="gallery" variant="top" height="200" />
              </Card>
            ))}
          </CardGroup>
          <Form.Control
            type="file"
            ref={hiddenGalleryInput}
            accept="image/*"
            style={{ display: 'none' }}
            onChange={previewGallery}
            multiple
          />
          <PlumButton onClick={addPicToGallery}>Add more photos</PlumButton>
        </Form.Group>
        <Link to="/rsvp-preview">
          <PlumFilledButton variant="primary" type="submit">
            Save Changes
          </PlumFilledButton>
        </Link>
      </Form>
    </Container>
  );
}
