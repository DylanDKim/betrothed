import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderGuestTable, renderRsvpStats, createListOfGuests } from './utils';
import AddForm from './AddForm';

import { getGuestData, checkingData } from '../API/Utils';

import PlumButton from '../Common/styled/buttonstyles/PlumButton';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';
import { BAlexBrush36 } from '../Common/styled/textstyles/AlexBrush36';

const GuestListMainPage = () => {
  const [show, setShow] = useState(false);
  const [guestData, setGuestData] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios({
      url: 'http://localhost:3000/guestlist/',
      params: {
        eventId: '61b79b9e0ac02dbe3e12fd1b',
      },
    })
      .then((response) => setGuestData(response.data))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <Container fluid="md" className="header">
        <BAlexBrush36>Guest List</BAlexBrush36>
        <Container>
          <PlumFilledButton variant="primary" onClick={handleShow}>
            Add Guest
          </PlumFilledButton>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <BAlexBrush36 style={{ fontSize: '15px' }}>
                <Modal.Title>Add A Guest</Modal.Title>
              </BAlexBrush36>
            </Modal.Header>
            <Modal.Body>
              <AddForm />
            </Modal.Body>
            <Modal.Footer>
              <PlumButton variant="secondary" onClick={handleClose}>
                Close
              </PlumButton>
            </Modal.Footer>
          </Modal>
        </Container>
      </Container>
      {guestData ? renderGuestTable(guestData) : null}
    </>
  );
};

export default GuestListMainPage;
