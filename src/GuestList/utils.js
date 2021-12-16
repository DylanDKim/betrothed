import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import mockData from './mockData';

export const editGuestInfo = (e) => {
  const guestInfo = e.currentTarget.nextSibling;

  return guestInfo.className.indexOf('collapse show') > -1
    ? guestInfo.classList.remove('show')
    : guestInfo.classList.add('show');
};

export const readNoteFromGuest = (e) => {
  const currentRow = e.currentTarget.closest('tr');
  const noteFromGuest = currentRow.nextSibling.nextSibling;

  return noteFromGuest.className.indexOf('collapse show-message') > -1
    ? noteFromGuest.classList.remove('show-message')
    : noteFromGuest.classList.add('show-message');
};

export const createListOfGuests = () => {
  const guestData = Object.keys(mockData.guests);
  const guestList = guestData.map((entry) => {
    const guests = mockData.guests[entry].map((guest) => (
      <>
        <tr onClick={editGuestInfo}>
          <td>{guest.group !== 'Individual' ? guest.group : ''}</td>
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
          <td>Group</td>
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

export const createRsvpStats = () => {
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

export const renderRsvpStats = () => {
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
