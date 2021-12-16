import React, { useState } from 'react';
import { Button, Container, Table, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderRsvpStats, createListOfGuests } from './utils';
import AddForm from './AddForm';

const GuestListMainPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container fluid="md" className="header">
        <h1>Guest List</h1>
        <Container>
          <Button variant="primary" onClick={handleShow}>
            Add Guest
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add A Guest</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddForm />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Save Changes
              </Button>
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
              <th>Group</th>
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
