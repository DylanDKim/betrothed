import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import mockData from './mockData';

const editGuestInfo = (e) => {
  const guestInfo = e.currentTarget.nextSibling;
  return guestInfo.className.indexOf('collapse show') > -1
    ? guestInfo.classList.remove('show')
    : guestInfo.classList.add('show');
};

const readNoteFromGuest = (e) => {
  // TODO: make this click handler run, but prevent parent handler from running (editGuestInfo); look into stopPropagation
  const currentRow = e.currentTarget.closest('tr');
  const noteFromGuest = currentRow.nextSibling.nextSibling;
  return noteFromGuest.className.indexOf('collapse show-message') > -1
    ? noteFromGuest.classList.remove('show-message')
    : noteFromGuest.classList.add('show-message');
};

const createListOfGuests = () => {
  /*
  TODO:
  Replace Note button in table with message icon
  Add edit functionality for guest name and email
  Add delete handler/functionality
  */
  const guestData = Object.keys(mockData.guests);
  const guestList = guestData.map((entry) => {
    const guests = mockData.guests[entry].map((guest) => (
      <>
        <tr onClick={editGuestInfo}>
          <td />
          <td>{guest.firstName + guest.lastName}</td>
          <td>{guest.email}</td>
          <td>{guest.rsvpStatus}</td>
          {guest.rsvpNote ? (
            <td>
              <Button onClick={readNoteFromGuest}>Note</Button>
            </td>
          ) : (
            <td />
          )}
        </tr>
        <tr className="collapse">
          <td />
          <td>Edit Name</td>
          <td>Edit Email</td>
          <td colSpan="2">
            <Button>Delete Guest</Button>
          </td>
        </tr>
        {guest.rsvpNote ? (
          <tr className="collapse show-message">
            <td colSpan="5">{guest.rsvpNote}</td>
          </tr>
        ) : null}
      </>
    ));
    return guests;
  });
  return guestList;
};

const createRsvpStats = () => {
  const guestData = Object.keys(mockData.guests);
  const attendance = {
    attending: 0,
    declined: 0,
    pending: 0,
  };

  guestData.forEach((entry) => {
    attendance.attending += mockData.guests[entry].filter(
      (guest) => guest.rsvpStatus === 'attending'
    ).length;
  });

  guestData.forEach((entry) => {
    attendance.pending += mockData.guests[entry].filter(
      (guest) => guest.rsvpStatus === 'pending'
    ).length;
  });

  guestData.forEach((entry) => {
    attendance.declined += mockData.guests[entry].filter(
      (guest) => guest.rsvpStatus === 'declined'
    ).length;
  });
  return attendance;
};

const renderRsvpStats = () => {
  const attendance = createRsvpStats();
  return (
    <Container>
      <Row>
        <Col>Invited</Col>
        <Col>Attending</Col>
        <Col>Pending</Col>
        <Col>Declined</Col>
      </Row>
      <Row>
        <Col>
          {attendance.attending + attendance.pending + attendance.declined}
        </Col>
        <Col>{attendance.attending}</Col>
        <Col>{attendance.pending}</Col>
        <Col>{attendance.declined}</Col>
      </Row>
    </Container>
  );
};

const GuestListMainPage = () => (
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
        <Button>Add Guest</Button>
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

export default GuestListMainPage;

/*
TODO:
Add Header
Add Footer
*/
