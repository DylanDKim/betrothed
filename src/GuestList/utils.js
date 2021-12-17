import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import Mail from './mail.svg';
import {
  GuestBMerr18,
  GuestBMerr24,
  GuestTableBMerr22,
  PlumFilledDeleteButton,
} from './GuestListMainPage.styles';

export const editGuestInfo = (e) => {
  const guestInfo = e.currentTarget.nextSibling;
  return guestInfo.className.indexOf('collapse show') > -1
    ? guestInfo.classList.remove('show')
    : guestInfo.classList.add('show');
};

export const readNoteFromGuest = (e) => {
  e.stopPropagation();
  const currentRow = e.currentTarget.closest('tr');
  const noteFromGuest = currentRow.nextSibling.nextSibling;
  return noteFromGuest.className.indexOf('collapse show') > -1
    ? noteFromGuest.classList.remove('show')
    : noteFromGuest.classList.add('show');
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
              <Mail onClick={readNoteFromGuest} />
            </td>
          ) : (
            <td />
          )}
        </tr>
        <tr
          className="collapse"
          style={{
            lineHeight: '2rem',
            verticalAlign: 'middle',
            backgroundColor: '#F8F9FA',
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
          <td colSpan="2">
            <PlumFilledDeleteButton>Delete Guest</PlumFilledDeleteButton>
          </td>
        </tr>
        {guest.rsvpNote ? (
          <GuestBMerr18
            className="collapse"
            style={{
              color: 'white',
              lineHeight: '2rem',
              verticalAlign: 'middle',
              backgroundColor: '#8b5b6e',
            }}
          >
            <td colSpan="5">{guest.rsvpNote}</td>
          </GuestBMerr18>
        ) : null}
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
