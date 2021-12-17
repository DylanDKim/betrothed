import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />}>
          <Route exact path="landing" element={<Landing />} />
        </Route>
        <Route exact path="/onboarding-1/" element={<Onboarding1 />} />
        <Route exact path="/onboarding-2" element={<Onboarding2 />} />
        <Route exact path="/onboarding-3" element={<Onboarding3 />} />
        <Route exact path="/onboarding-4" element={<Onboarding4 />} />
        <Route exact path="/onboarding-5" element={<Onboarding5 />} />
        <Route
          exact
          path="/guest-invite"
          element={<Invite isPreview={isPreview} />}
        />
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
        <Route path="/guest-invite" element={<Invite />} />
        <Route path="/rsvp-form" element={<RsvpForm />} />
      </Routes>
    </Router>
  );
}
