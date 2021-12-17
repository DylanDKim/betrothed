import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';
import WhiteFilledButton from '../Common/styled/buttonstyles/WhiteFilledButton';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';

export default function RSVP({ isPreview, galleryURL }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <div>
      <Container>
        {isPreview === true && (
          <div style={{ backgroundColor: '#8B5B6E' }}>
            <div className="d-flex justify-content-center">
              <BFaustinaH3>Your Invitation Preview</BFaustinaH3>
            </div>
            <Stack
              className="mb-5 d-flex justify-content-center"
              direction="horizontal"
              gap={3}
            >
              <Link to="/event/1/invitation-form">
                <PlumFilledButton style={{ border: '1px white solid' }}>
                  More Edits
                </PlumFilledButton>
              </Link>
              <Link to="/event/1">
                <WhiteFilledButton>Save Changes</WhiteFilledButton>
              </Link>
            </Stack>
          </div>
        )}
      </Container>
      <div className="d-block h-75 w-75" style={{ marginLeft: '12.5%' }}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2500}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={1000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={['tablet', 'mobile']}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {(galleryURL || []).map((url) => (
            <img
              className="d-block h-100 w-100 pe-2"
              src={url}
              alt="gallery"
              key={Math.random()}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
