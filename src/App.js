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
  console.log('Pls do not use /testing as the path name for your route');
  /**
   * 1. npm run server:dev
   * 2. npm run dev:w (if npm run dev is not working)
   * 3. Add the route path after localhost:3000
   *
   */
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9c54626c9fbb50387cb9cbec5b99afabb36a7a67
        <Route exact path="/guest-invite" element={<Invite />} />
        <Route exact path="/rsvp-form" element={<RsvpForm />} />
        <Route path="/event/:event_id" element={<Frame />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="registry" element={<Registry />} />
          <Route path="registrystart" element={<RegistryStart />} />
          <Route path="registryadd" element={<RegistryAdd />} />
          <Route path="browse-theme" element={<BrowseTheme />} />
<<<<<<< HEAD
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
              />
            }
          />
          <Route
            path="rsvp-preview"
            element={<RSVP galleryURL={galleryURL} mainPhoto={mainPhoto} />}
          />
          <Route path="guestlist" element={<GuestListMainPage />} />
=======
=======
>>>>>>> 0a1387f (App resaved)
=======
          <Route path="choose-content" element={<ChooseContent />} />
          <Route path="invitation-form" element={<InvitationForm />} />
          <Route path="guestregistry" element={<GuestRegistry />} />
          <Route path="guestlist" element={<GuestListMainPage />} />
=======
>>>>>>> 9c54626c9fbb50387cb9cbec5b99afabb36a7a67
        <Route path="/" element={<Frame />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/rsvp-preview" element={<RSVP />} />
          <Route path="/invite" element={<InvitationForm />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/registrystart" element={<RegistryStart />} />
          <Route path="/registryadd" element={<RegistryAdd />} />
          <Route path="/browse-theme" element={<BrowseTheme />} />
          <Route path="/choose-content" element={<ChooseContent />} />
          <Route path="/invitation-form" element={<InvitationForm />} />
          <Route path="/guestRegistry" element={<GuestRegistry />} />
          <Route path="/guestlist" element={<GuestListMainPage />} />
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2d2524f (Normalized height for demo add to registry cards)
=======
>>>>>>> 0a1387f (App resaved)
=======
>>>>>>> 9ccb2f6684d86a2bc19a9d2714c7b52635ba7981
>>>>>>> 9c54626c9fbb50387cb9cbec5b99afabb36a7a67
        </Route>
        <Route path="/guest-invite" element={<Invite />} />
        <Route path="/rsvp-form" element={<RsvpForm />} />
      </Routes>
    </Router>
  );
}
