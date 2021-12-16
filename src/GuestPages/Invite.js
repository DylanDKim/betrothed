import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import InfoRsvp from './InfoRSVP';
import GuestRegistry from '../registry/guestRegistry';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { BAlexBrush36 } from '../Common/styled/textstyles/AlexBrush36';
import { BMerr18 } from '../Common/styled/textstyles/Merr18';

const Invite = () => (
  <>
    <img
      src="https://iso.500px.com/wp-content/uploads/2016/06/stock-photo-133803155.jpg"
      alt="main wedding spalsh"
      style={{
        width: '100vw',
        height: '65vh',
        overflow: 'hidden',
        objectFit: 'cover',
        margin: 0,
      }}
    />
    <Container fluid>
      <InfoRsvp onSameLine={false} />

      <Link
        to="/rsvp-form"
        className="d-flex justify-content-center m-5 text-decoration-none"
      >
        <PlumFilledButton>RSVP</PlumFilledButton>
      </Link>

      <div className="d-flex justify-content-center">
        <hr className="w-50" />
      </div>
      <BAlexBrush36 className="d-flex justify-content-center">
        Message From the Couple
      </BAlexBrush36>
      <div className="d-flex justify-content-center">
        <div className="w-50">
          Text block about some message the couple wants to send out the the
          guests. Is is this optional or required. Should there also be a limit
          or maybe not since it would not make much of a difference in the end.
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <hr className="w-50" />
      </div>
      <BAlexBrush36 className="d-flex justify-content-center">
        Registry
      </BAlexBrush36>
      <GuestRegistry />
      <div className="d-flex justify-content-center">
        <hr className="w-50" />
      </div>
      <BAlexBrush36 className="d-flex justify-content-center">
        Gallery
      </BAlexBrush36>
    </Container>
  </>
);

export default Invite;
