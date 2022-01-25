import React, { useState, useEffect } from 'react';
import {
  useHistory,
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import axios from 'axios';
import InvitationForm from './Invitation/InvitationForm';
import RSVP from './Invitation/RSVP';
import Registry from './registry/registry';
import RegistryStart from './registry/registrystart';
import RegistryAdd from './registry/registryadd';
import Invite from './GuestPages/Invite';
import RsvpForm from './GuestPages/RSVP';
import Onboarding1 from './Onboarding/Onboarding1';
import BrowseTheme from './Invitation/BrowseTheme';
import ChooseContent from './Invitation/ChooseContent';
import GuestListMainPage from './GuestList/GuestListMainPage';
import Onboarding2 from './Onboarding/Onboarding2';
import Onboarding6 from './Onboarding/Onboarding6';
import Onboarding3 from './Onboarding/Onboarding3';
import Onboarding4 from './Onboarding/Onboarding4';
import Onboarding5 from './Onboarding/Onboarding5';
import Dashboard from './Dashboard/Dashboard';
import Frame from './HeaderFooter/Frame';
import Landing from './Onboarding/Landing';
import Onboarding from './Onboarding/Onboarding';

export default function App() {
  const [inviteMessage, setInviteMessage] = useState('');
  const [chosedTheme, setChosedTheme] = useState('');
  const [galleryURL, setGalleryURL] = useState([
    'https://images.unsplash.com/photo-1587318634139-bbc108e44808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
    'https://images.unsplash.com/photo-1600038938045-b5fadbc55083?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1595280544618-d5136675b6ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',
  ]);
  const [mainPhoto, setMainPhoto] = useState(
    'https://images.unsplash.com/photo-1592218946197-f6c4816c5b03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
  );
  const [isPreview, setIsPreview] = useState(false);
  /**
   * 1. npm run server:dev
   * 2. npm run dev:w (if npm run dev is not working)
   * 3. Add the route path after localhost:3000
   *
   */

  const [email, setEmail] = useState('');
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
  const [guestLimit, setGuestLimit] = useState(0);
  const [rsvpDeadline, setRSVPDeadline] = useState('');
  const [dashboardPhotoUrl, setDashboardPhotoUrl] = useState('');
  const [bannerPhotoUrl, setBannerPhotoUrl] = useState('');
  const [id, setId] = useState('');

  const createEvent = () => {
    axios
      .post(`https://betrothed-server.herokuapp.com/api/events`, {
        coupleName1: firstName,
        coupleName2: partnerFirstName,
        email: email,
        date: new Date(weddingDate).toISOString(),
        venue: venue,
        addressLine1: addressLine1,
        addressLine2: addressLine2,
        city: city,
        state: state,
        zip: zip,
        guestLimit: guestLimit,
        rsvpDeadline: new Date(rsvpDeadline).toISOString(),
        inviteMessage: `Welcome to ${firstName} and ${partnerFirstName}'s Wedding Celebration!`,
      })
      .then(({ data }) => {
        setId(data.createdEvent._id);
        console.log(data.createdEvent._id);
        console.log(id);
        window.location.href = `/event/${data.createdEvent._id}/dashboard`;
        // const navigate = useNavigate();
        // navigate(`/event/${data.data._id}/dashboard`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />}>
          <Route
            path="landing"
            element={<Landing vEmail={email} cEmail={setEmail} />}
          />
          <Route
            exact
            path="onboarding-1"
            element={
              <Onboarding1
                firstname={firstName}
                lastname={lastName}
                partnerFirstName={partnerFirstName}
                partnerLastName={partnerLastName}
                setFirstName={setFirstName}
                setLastName={setLastName}
                setPartnerFirstName={setPartnerFirstName}
                setPartnerLastName={setPartnerLastName}
              />
            }
          />
          <Route
            exact
            path="onboarding-2"
            element={
              <Onboarding2
                weddingDate={weddingDate}
                setWeddingDate={setWeddingDate}
              />
            }
          />
          <Route
            exact
            path="onboarding-2.5"
            element={
              <Onboarding6
                venue={venue}
                setVenue={setVenue}
                addressLine1={addressLine1}
                setAddressLine1={setAddressLine1}
                addressLine2={addressLine2}
                setAddressLine2={setAddressLine2}
                city={city}
                setCity={setCity}
                state={state}
                setState={setState}
                zip={zip}
                setZip={setZip}
              />
            }
          />
          <Route
            exact
            path="onboarding-3"
            element={
              <Onboarding3
                guestLimit={guestLimit}
                setGuestLimit={setGuestLimit}
              />
            }
          />
          <Route exact path="onboarding-4" element={<Onboarding4 />} />
          <Route
            exact
            path="onboarding-5"
            element={
              <Onboarding5
                rsvpDeadline={rsvpDeadline}
                setRSVPDeadline={setRSVPDeadline}
                createEvent={createEvent}
                id={id}
              />
            }
          />
        </Route>
        <Route
          exact
          path="/guest-invite"
          element={<Invite isPreview={isPreview} id={id} />}
        />
        {/* <Route exact path="/guest-invite" element={<Invite />} /> */}
        <Route exact path="/rsvp-form" element={<RsvpForm />} />
        <Route path="/event/:event_id" element={<Frame />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="registry" element={<Registry />} />
          <Route path="registrystart" element={<RegistryStart />} />
          <Route path="registryadd" element={<RegistryAdd />} />
          <Route path="browse-theme" element={<BrowseTheme />} />
          <Route
            path="choose-content"
            element={<ChooseContent setChosedTheme={setChosedTheme} />}
          />
          <Route
            path="invitation-form"
            element={
              <InvitationForm
                chosedTheme={chosedTheme}
                galleryURL={galleryURL}
                setGalleryURL={setGalleryURL}
                mainPhoto={mainPhoto}
                setMainPhoto={setMainPhoto}
                inviteMessage={inviteMessage}
                setInviteMessage={setInviteMessage}
                setIsPreview={setIsPreview}
                isPreview={isPreview}
              />
            }
          />
          <Route
            path="rsvp-preview"
            element={
              <RSVP
                galleryURL={galleryURL}
                mainPhoto={mainPhoto}
                isPreview={isPreview}
              />
            }
          />
          <Route path="guestlist" element={<GuestListMainPage />} />
        </Route>
        <Route path="/event/:eventID/guest-invite" element={<Invite />} />
        <Route path="/event/:eventID/rsvp-form" element={<RsvpForm />} />
      </Routes>
    </Router>
  );
}
