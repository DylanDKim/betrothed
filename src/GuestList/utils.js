import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
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

export const createListOfGuests = (data) => {
  const guestData = Object.keys(data.guests);
  const guestList = guestData.map((entry) => {
    const guests = data.guests[entry].map((guest) => (
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
            {attendance.attending +
              attendance.pending +
              attendance.notAttending}
          </BMerr24>
        </Col>
        <Col>
          <BMerr24>{attendance.attending}</BMerr24>
        </Col>
        <Col>
          <BMerr24>{attendance.pending}</BMerr24>
        </Col>
        <Col>
          <BMerr24>{attendance.notAttending}</BMerr24>
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
              <BMerr18>Group</BMerr18>
            </th>
            <th>
              <BMerr18>Name</BMerr18>
            </th>
            <th>
              <BMerr18>Email</BMerr18>
            </th>
            <th>
              <BMerr18>RSVP Status</BMerr18>
            </th>
            <th>
              <BMerr18>Message</BMerr18>
            </th>
          </tr>
        </thead>
        <tbody>{createListOfGuests(data)}</tbody>
      </Table>
    </Container>
  </>
);
