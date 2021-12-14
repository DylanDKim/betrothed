import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Hello() {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);

  return (
    <>
      <h2>This is RSVP Page</h2>
      <Link to="/invitation-form">
        <Button>Click me to Go to Invitation Page</Button>
        <div className="d-flex justify-content-center">
          <Carousel className="d-block h-25 w-25">
            {(from || []).map((url) => (
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
      </Link>
    </>
  );
}
