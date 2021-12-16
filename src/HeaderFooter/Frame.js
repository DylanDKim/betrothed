import React from 'react';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Navbar';
import Footer from './Footer';

export default function Frame(props) {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
