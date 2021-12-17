import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderGuestTable } from './utils';
import AddForm from './AddForm';
import PlumButton from '../Common/styled/buttonstyles/PlumButton';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';
import { BAlexBrush36 } from '../Common/styled/textstyles/AlexBrush36';

const GuestListMainPage = () => {
  const [show, setShow] = useState(false);
  const [guestData, setGuestData] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { event_id: eventId } = useParams();

  useEffect(() => {
    axios({
      url: 'http://localhost:3000/guestlist/',
      params: {
        eventId,
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
