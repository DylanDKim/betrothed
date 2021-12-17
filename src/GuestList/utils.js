import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Mail from './mail.svg';
import { BMerr18 } from '../Common/styled/textstyles/Merr18';
import {
  GuestBMerr18,
  GuestBMerr24,
  GuestTableBMerr22,
} from './GuestListMainPage.styles';

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

export const createListOfGuests = (data) => {
  const guestData = Object.keys(data.guests);
  const guestList = guestData.map((entry) => {
    const guests = data.guests[entry].map((guest) => (
      <>
        <tr
          onClick={editGuestInfo}
          style={{
            lineHeight: '2rem',
            verticalAlign: 'middle',
          }}
        >
          <td>
            <GuestBMerr18>
              {guest.group !== 'Individual' ? guest.group : ''}
            </GuestBMerr18>
          </td>
          <td>
            <GuestBMerr18>{guest.firstName + guest.lastName}</GuestBMerr18>
          </td>
          <td>
            <GuestBMerr18>{guest.email}</GuestBMerr18>
          </td>
          <td>
            <GuestBMerr18>{guest.rsvpStatus}</GuestBMerr18>
          </td>
          {guest.rsvpNote ? (
            <td>
              {/* <Button onClick={readNoteFromGuest}>Note</Button> */}
              <Mail />
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

export const createRsvpStats = (data) => {
  const guestData = Object.keys(data.guests);
  const attendance = {
    attending: 0,
    notAttending: 0,
    pending: 0,
  };

  guestData.forEach((entry) => {
    attendance.attending += data.guests[entry].filter(
      (guest) => guest.rsvpStatus === 'attending'
    ).length;
  });
  guestData.forEach((entry) => {
    attendance.pending += data.guests[entry].filter(
      (guest) => guest.rsvpStatus === 'pending'
    ).length;
  });
  guestData.forEach((entry) => {
    attendance.notAttending += data.guests[entry].filter(
      (guest) => guest.rsvpStatus === 'not attending'
    ).length;
  });

  return attendance;
};

export const renderRsvpStats = (data) => {
  const attendance = createRsvpStats(data);
  return (
    <Container
      style={{
        border: 'solid 1px #90B0C5',
        marginTop: '2rem',
        marginBottom: '2rem',
        padding: '1rem',
      }}
    >
      <Row>
        <Col>
          <GuestBMerr24>Invited</GuestBMerr24>
        </Col>
        <Col>
          <GuestBMerr24>Attending</GuestBMerr24>
        </Col>
        <Col>
          <GuestBMerr24>Pending</GuestBMerr24>
        </Col>
        <Col>
          <GuestBMerr24>Declined</GuestBMerr24>
        </Col>
      </Row>
      <Row>
        <Col>
          <GuestBMerr24>
            {attendance.attending +
              attendance.pending +
              attendance.notAttending}
          </GuestBMerr24>
        </Col>
        <Col>
          <GuestBMerr24>{attendance.attending}</GuestBMerr24>
        </Col>
        <Col>
          <GuestBMerr24>{attendance.pending}</GuestBMerr24>
        </Col>
        <Col>
          <GuestBMerr24>{attendance.notAttending}</GuestBMerr24>
        </Col>
      </Row>
    </Container>
  );
};

export const renderGuestTable = (data) => (
  <>
    <Container fluid="md" className="high-level-rsvp-data">
      {renderRsvpStats(data)}
    </Container>
    <Container fluid="md" className="guest-list-table">
      <Table>
        <thead>
          <tr>
            <th>
              <GuestTableBMerr22>Group</GuestTableBMerr22>
            </th>
            <th>
              <GuestTableBMerr22>Name</GuestTableBMerr22>
            </th>
            <th>
              <GuestTableBMerr22>Email</GuestTableBMerr22>
            </th>
            <th>
              <GuestTableBMerr22>RSVP Status</GuestTableBMerr22>
            </th>
            <th>
              <GuestTableBMerr22>Message</GuestTableBMerr22>
            </th>
          </tr>
        </thead>
        <tbody>{createListOfGuests(data)}</tbody>
      </Table>
    </Container>
  </>
);
