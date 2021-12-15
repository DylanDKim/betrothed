import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderRsvpStats, createListOfGuests } from './utils';

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
