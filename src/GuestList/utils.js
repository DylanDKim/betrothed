import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import mockData from './mockData';
import { BMerr18 } from '../Common/styled/textstyles/Merr18';
import { BMerr24 } from '../Common/styled/textstyles/Merr24';

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
          <td>
            <BMerr18>{guest.group !== 'Individual' ? guest.group : ''}</BMerr18>
          </td>
          <td>
            <BMerr18>{guest.firstName + guest.lastName}</BMerr18>
          </td>
          <td>
            <BMerr18>{guest.email}</BMerr18>
          </td>
          <td>
            <BMerr18>{guest.rsvpStatus}</BMerr18>
          </td>
          {guest.rsvpNote ? (
            <td>
              {/* <Button onClick={readNoteFromGuest}>Note</Button> */}
              Note
            </td>
          ) : (
            <td />
          )}
        </tr>
        <tr className="collapse">
          <td>
            <BMerr18>Group</BMerr18>
          </td>
          <td>
            <BMerr18>Edit Name</BMerr18>
          </td>
          <td>
            <BMerr18>Edit Email</BMerr18>
          </td>
          <td colSpan="2">
            <Button>Delete Guest</Button>
          </td>
        </tr>
        <BMerr18>
          {guest.rsvpNote ? (
            <tr className="collapse show-message">
              <td colSpan="5">{guest.rsvpNote}</td>
            </tr>
          ) : null}
        </BMerr18>
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
        <Col>
          <BMerr24>Invited</BMerr24>
        </Col>
        <Col>
          <BMerr24>Attending</BMerr24>
        </Col>
        <Col>
          <BMerr24>Pending</BMerr24>
        </Col>
        <Col>
          <BMerr24>Declined</BMerr24>
        </Col>
      </Row>
      <Row>
        <Col>
          <BMerr24>
            {attendance.attending + attendance.pending + attendance.declined}
          </BMerr24>
        </Col>
        <Col>
          <BMerr24>{attendance.attending}</BMerr24>
        </Col>
        <Col>
          <BMerr24>{attendance.pending}</BMerr24>
        </Col>
        <Col>
          <BMerr24>{attendance.declined}</BMerr24>
        </Col>
      </Row>
    </Container>
  );
};
