import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';
import WhiteFilledButton from '../Common/styled/buttonstyles/WhiteFilledButton';

export default function RSVP({ galleryURL }) {
  return (
    <>
      <h2>This is RSVP Page</h2>
      <Link to="/invitation-form">
        <PlumFilledButton>More Edits</PlumFilledButton>
      </Link>
      <Link to="/">
        <WhiteFilledButton>Save Changes</WhiteFilledButton>
      </Link>
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
    </>
  );
}
