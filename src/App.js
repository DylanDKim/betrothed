import React from 'react';
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
        <Route exact path="/onboarding-1" element={<Onboarding1 />} />
        <Route exact path="/onboarding-2" element={<Onboarding2 />} />
        <Route exact path="/onboarding-3" element={<Onboarding3 />} />
        <Route exact path="/onboarding-4" element={<Onboarding4 />} />
        <Route exact path="/onboarding-5" element={<Onboarding5 />} />
        <Route exact path="/guest-invite" element={<Invite />} />
        <Route exact path="/rsvp-form" element={<RsvpForm />} />
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
          <Route path="/rsvp-preview" element={<RSVP />} />
          <Route path="/guestlist" element={<GuestListMainPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
