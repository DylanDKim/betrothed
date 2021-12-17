import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Col, Modal } from 'react-bootstrap';
import AddForm from './AddForm';
import { renderGuestTable } from './utils';
import 'bootstrap/dist/css/bootstrap.min.css';
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
      <Container
        fluid="md"
        className="header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '1rem',
        }}
      >
        <Col>
          <BAlexBrush36
            style={{
              fontSize: '64px',
            }}
          >
            Guest List
          </BAlexBrush36>
        </Col>
        <Col
          style={{
            display: 'flex',
          }}
        >
          <PlumFilledButton
            variant="primary"
            onClick={handleShow}
            style={{
              alignSelf: 'center',
            }}
          >
            Add Guest
          </PlumFilledButton>
        </Col>
      </Container>
      <Container>
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

      {guestData ? renderGuestTable(guestData) : null}
    </>
  );
};

export default GuestListMainPage;
