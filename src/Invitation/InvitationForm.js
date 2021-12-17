import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Stack, Row, Col, Image } from 'react-bootstrap';
import { FittedImg } from './invitation.styled';
import PlumButton from '../Common/styled/buttonstyles/PlumButton';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';
import { BMerr18 } from '../Common/styled/textstyles/Merr18';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function InvitationForm({
  chosedTheme,
  galleryURL,
  setGalleryURL,
  mainPhoto,
  setMainPhoto,
  inviteMessage,
  setInviteMessage,
  setIsPreview,
}) {
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
    e.preventDefault();
    setInviteMessage(e.target.value);
  };

  const previewGallery = (e) => {
    const selectedPhotos = e.target.files;
    for (let i = 0; i < selectedPhotos.length; i++) {
      galleryArray.push(URL.createObjectURL(selectedPhotos[i]));
    }
    setGalleryURL([...galleryArray, ...galleryURL]);
  };

  return (
    <Container
      style={{
        width: '65%',
        background: `url(${chosedTheme}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <BAlexBrushH1>Your Wedding Website</BAlexBrushH1>
      <Stack className="mb-3" direction="horizontal" gap={3}>
        <PlumButton className="ms-auto">Share your website</PlumButton>
        <Link to="/guest-invite">
          <PlumFilledButton onClick={() => setIsPreview(true)}>
            Preview Site
          </PlumFilledButton>
        </Link>
      </Stack>
      <BFaustinaH3>Main Photo</BFaustinaH3>
      <FittedImg src={mainPhoto} alt="mainPhoto" />
      <input
        type="file"
        ref={hiddenMainPhotoInput}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={previewMainPhoto}
      />
      <div className="d-flex justify-content-center mt-2">
        <PlumButton onClick={uploadMainPhoto}>Choose new photo</PlumButton>
      </div>
      <Form className="mt-3">
        <Form.Group className="mb-3" controlId="formMessage">
          <BFaustinaH3>Message</BFaustinaH3>
          <Form.Control
            as="textarea"
            value={inviteMessage}
            onChange={updateMessage}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <BFaustinaH3>Gallery</BFaustinaH3>
          <Row xs={6} md={3}>
            {(galleryURL || []).map((url) => (
              <Col className="pe-1 pt-2">
                <Image
                  className="w-100 h-100"
                  src={url}
                  alt="gallery"
                  key={Math.random()}
                />
              </Col>
            ))}
          </Row>
          <Form.Control
            type="file"
            ref={hiddenGalleryInput}
            accept="image/*"
            style={{ display: 'none' }}
            onChange={previewGallery}
            multiple
          />
          <BMerr18>💡Pro Tip: A vertical photo will look best.</BMerr18>
          <div className="d-flex justify-content-center mt-2">
            <PlumButton onClick={addPicToGallery}>Add more photos</PlumButton>
          </div>
        </Form.Group>
        <div className="d-flex justify-content-end">
          <Link to="/guest-invite">
            <PlumFilledButton
              className="mb-5"
              type="submit"
              onClick={() => setIsPreview(true)}
            >
              Save Changes
            </PlumFilledButton>
          </Link>
        </div>
      </Form>
    </Container>
  );
}
