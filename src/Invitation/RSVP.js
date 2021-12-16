import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Carousel, Row, Col, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';
import WhiteFilledButton from '../Common/styled/buttonstyles/WhiteFilledButton';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';

export default function RSVP({ galleryURL }) {
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <BFaustinaH3>Your Invitation Preview</BFaustinaH3>
      </div>
      {/* <Row>
        <Col>
          <Link to="/invitation-form">
            <PlumFilledButton>More Edits</PlumFilledButton>
          </Link>
        </Col>
        <Col>
          <Link to="/">
            <WhiteFilledButton>Save Changes</WhiteFilledButton>
          </Link>
        </Col>
      </Row> */}
      <Stack
        className="mb-5 d-flex justify-content-center"
        direction="horizontal"
        gap={3}
      >
        <Link to="/invitation-form">
          <PlumFilledButton>More Edits</PlumFilledButton>
        </Link>
        <Link to="/">
          <WhiteFilledButton>Save Changes</WhiteFilledButton>
        </Link>
      </Stack>
      {/* </div> */}
      <div className="d-flex justify-content-center">
        <Carousel className="d-block h-25 w-25">
          {(galleryURL || []).map((url) => (
            <Carousel.Item>
              <img
                className="d-block h-100 w-100"
                src={url}
                alt="First slide"
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </Container>
  );
}
