import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Table, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderRsvpStats, createListOfGuests } from './utils';
import AddForm from './AddForm';
import PlumButton from '../Common/styled/buttonstyles/PlumButton';
import { BAlexBrush36 } from '../Common/styled/textstyles/AlexBrush36';

const GuestListMainPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid="md" className="header">
        <Container>
          <h1>Betrothed</h1>
        </Container>
        <Container>
          <h1>Guest List</h1>
        </Container>
        <Container>
          <Link to="/dashboard">
            <Button>Back to Dashboard</Button>
          </Link>
          <Button variant="primary" onClick={handleShow}>
            Add Guest
          </Button>
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

      <Container fluid="md" className="high-level-rsvp-data">
        {renderRsvpStats()}
      </Container>

      <Container fluid="md" className="guest-list-table">
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>RSVP Status</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>{createListOfGuests()}</tbody>
        </Table>
      </Container>
    </>
  );
};

export default GuestListMainPage;
