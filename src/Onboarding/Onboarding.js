import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function OnboardingBase(props) {
  const [email, setEmail] = useState('email.addres');

  console.log(email);

  const body = {
    coupleName1: firstName + ' ' + lastName,
    coupleName2: partnerFirstName + ' ' + partnerLastName,
    email: email,
    date: date,
    venue: venue,
    addressLine1: 'addressLine1',
    addressLine2: 'addressLine2',
    city: 'city',
    state: 'state',
    zip: 'zip',
    guestLimit: guestLimit,
    rsvpDeadline: rsvpDeadline,
    inviteMessage: '',
    dashboardPhotoUrl: '',
    bannerPhotoUrl: '',
  };
  useEffect(() => {
    axios.get(`https://betrothed-server.herokuapp.com/api/events/`, (data) =>
      console.log(data.data)
    );
  });
  return (
    <>
      <Outlet email={email} setEmail={setEmail} />
    </>
  );
}
