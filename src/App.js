import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InvitationForm from './Invitation/InvitationForm';
import Testing from './Invitation/Testing';
import Hello from './Invitation/Hello';

export default function App() {
  console.log('Pls do not use testing as the path name for your route')
  return (
    <Router>
       <Routes>
        <Route path='/' element={<InvitationForm />} />
        <Route path='/sometest' element={<Testing />} />
        <Route path='/invitation' element={<InvitationForm />} />
        <Route path='/hello' element={<Hello />} />
      </Routes>
  </Router>
  )
}