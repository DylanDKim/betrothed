/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Button, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
import InfoRsvp from './InfoRSVP';
import GuestRegistry from '../registry/guestRegistry';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { BAlexBrush36 } from '../Common/styled/textstyles/AlexBrush36';
import { BMerr18 } from '../Common/styled/textstyles/Merr18';
import WhiteFilledButton from '../Common/styled/buttonstyles/WhiteFilledButton';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';

// hardcoded gallery urls
const galleryURL = [
  'https://images.unsplash.com/photo-1587318634139-bbc108e44808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
  'https://images.unsplash.com/photo-1600038938045-b5fadbc55083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  'https://images.unsplash.com/photo-1595280544618-d5136675b6ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',
  'https://images.unsplash.com/photo-1550713450-94c9b4fc9f25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
];

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

const Invite = ({ isPreview, id }) => {
  const { eventID } = useParams();
  const [coupleInfo, updateInfo] = useState(null);
  const backToInviteLink = `/event/${eventID}/invitation-form`;
  const backtoHomeLink = `/event/${eventID}/dashboard`;
  const rsvpLink = `/event/${eventID}/rsvp-form`;

  useEffect(() => {
    axios
      .get(`/coupleInfo/${eventID}`)
      .then((result) => {
        updateInfo(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [eventID]);

  return (
    <>
      {coupleInfo ? (
        <>
          <img
            src={coupleInfo.bannerPhotoURL}
            alt="main wedding splash"
            style={{
              width: '100vw',
              height: '65vh',
              overflow: 'hidden',
              objectFit: 'cover',
              margin: 0,
            }}
          />
          <Container fluid>
            <InfoRsvp
              onSameLine={false}
              showDeadline={false}
              coupleInfo={coupleInfo}
            />
            {isPreview === true && (
              <div style={{ backgroundColor: '#8B5B6E' }}>
                <div className="d-flex justify-content-center py-3">
                  <BFaustinaH3>Your Invitation Preview</BFaustinaH3>
                </div>
                <Stack
                  className="mb-5 d-flex justify-content-center pt-2 pb-3"
                  direction="horizontal"
                  gap={3}
                >
                  <Link to={backToInviteLink}>
                    <PlumFilledButton style={{ border: '1px white solid' }}>
                      More Edits
                    </PlumFilledButton>
                  </Link>
                  <Link to={backtoHomeLink}>
                    <WhiteFilledButton>Save Changes</WhiteFilledButton>
                  </Link>
                </Stack>
              </div>
            )}
            <Link
              to={rsvpLink}
              className="d-flex justify-content-center m-5 text-decoration-none"
            >
              <PlumFilledButton style={{ width: '12.5%' }}>
                RSVP
              </PlumFilledButton>
            </Link>

            <div className="d-flex justify-content-center mt-5 mb-3">
              <hr className="w-50" />
            </div>
            <BAlexBrush36 className="d-flex justify-content-center mb-3">
              Message From the Couple
            </BAlexBrush36>
            <div className="d-flex justify-content-center">
              <BMerr18 className="w-50 text-center">
                {coupleInfo.inviteMessage}
              </BMerr18>
            </div>
            <div className="d-flex justify-content-center mt-5 mb-3">
              <hr className="w-50" />
            </div>
            <BAlexBrush36 className="d-flex justify-content-center mb-3">
              Registry
            </BAlexBrush36>
            <GuestRegistry />
            <div className="d-flex justify-content-center mt-5 mb-3">
              <hr className="w-50" />
            </div>
            <BAlexBrush36 className="d-flex justify-content-center mb-3">
              Gallery
            </BAlexBrush36>
            <div className="overflow-auto">
              <Carousel
                swipeable={false}
                draggable={false}
                showDots
                ssr
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={2500}
                keyBoardControl
                customTransition="all .5"
                transitionDuration={1000}
                containerClass="carousel-container"
                removeArrowOnDeviceType={['tablet', 'mobile']}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
              >
                {galleryURL.map((url) => (
                  <img
                    className="d-block h-100 w-100 pe-2"
                    src={url}
                    alt="gallery"
                    key={Math.random()}
                  />
                ))}
              </Carousel>
            </div>
          </Container>
        </>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default Invite;
