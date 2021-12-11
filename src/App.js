import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvitationForm from './Invitation/InvitationForm';
import Testing from './Invitation/Testing';
import RSVP from './Invitation/RSVP';

export default function App() {
  console.log('Pls do not use testing as the path name for your route')
  /**
   * 1. npm run server:dev
   * 2. npm run build:w (if npm run dev is not working)
   * 3. Add the route path after localhost:3000
   *
  */
  return (
    <Router>
       <Routes>
        <Route path='/' element={<h2>Just localhost</h2>} />
        <Route path='/rsvp' element={<RSVP />} />
        <Route path='/sometest' element={<Testing />} />
        <Route path='/invitation' element={<InvitationForm />} />
      </Routes>
  </Router>
  )
}