import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvitationForm from './Invitation/InvitationForm';
import RSVP from './Invitation/RSVP';
import Registry from './registry/registry';
import RegistryStart from './registry/registrystart';
import RegistryAdd from './registry/registryadd';
import GuestRegistry from './registry/guestRegistry';
import Invite from './GuestPages/Invite';
import RsvpForm from './GuestPages/RSVP';
import Onboarding1 from './Onboarding/Onboarding1';
import BrowseTheme from './Invitation/BrowseTheme';
import ChooseContent from './Invitation/ChooseContent';
import GuestListMainPage from './GuestList/GuestListMainPage';

export default function App() {
  console.log('Pls do not use /testing as the path name for your route');
  /**
   * 1. npm run server:dev
   * 2. npm run dev:w (if npm run dev is not working)
   * 3. Add the route path after localhost:3000
   *
   */
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Onboarding1 />
            // <h2>Just localhost</h2>
          }
        />
        <Route path="/registry" element={<Registry />} />
        <Route path="/registrystart" element={<RegistryStart />} />
        <Route path="/registryadd" element={<RegistryAdd />} />
        <Route path="/guestregistry" element={<GuestRegistry />} />
        <Route path="/guest-invite" element={<Invite />} />
        <Route path="/rsvp-form" element={<RsvpForm />} />
        <Route path="/browse-theme" element={<BrowseTheme />} />
        <Route path="/choose-content" element={<ChooseContent />} />
        <Route path="/invitation-form" element={<InvitationForm />} />
        <Route path="/rsvp-preview" element={<RSVP />} />
        <Route path="/guestlist" element={<GuestListMainPage />} />
      </Routes>
    </Router>
  );
}
