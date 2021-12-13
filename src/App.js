import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InvitationForm from './Invitation/InvitationForm';
import Testing from './Invitation/Testing';
import RSVP from './Invitation/RSVP';
import Registry from './registry/registry';
import Invite from './GuestPages/Invite';
import RsvpForm from './GuestPages/RSVP';
import Onboarding1 from './Onboarding/Onboarding1';

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
        <Route path="/sometest" element={<Testing />} />
        <Route path="/rsvp-preview" element={<RSVP />} />
        <Route path="/invite" element={<InvitationForm />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/guest-invite" element={<Invite />} />
        <Route path="/rsvp-form" element={<RsvpForm />} />
      </Routes>
    </Router>
  );
}
