import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function OnboardingBase(props) {
  const [email, setEmail] = useState('email.addres');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [partnerFirstName, setPartnerFirstName] = useState('');
  const [partnerLastName, setPartnerLastName] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [venue, setVenue] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [guestLimit, setGuestLimit] = useState('');
  const [rsvpDeadline, setRSVPDeadline] = useState('');
  const [inviteMessage, setInviteMessage] = useState('');
  const [dashboardPhotoUrl, setDashboardPhotoUrl] = useState('');
  const [bannerPhotoUrl, setBannerPhotoUrl] = useState('');

  return (
    <>
      <Outlet />
    </>
  );
}
