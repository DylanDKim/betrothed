import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const editGuestInfo = (e) => {
  const hiddenElement = e.currentTarget.nextSibling;
  return hiddenElement.className.indexOf('collapse show') > -1
    ? hiddenElement.classList.remove('show')
    : hiddenElement.classList.add('show');
};

const readNoteFromGuest = (e) => {
  e.stopPropagation();
  const hiddenElement = e.currentTarget.nextSibling;
  return hiddenElement.className.indexOf('collapse show-message') > -1
    ? hiddenElement.classList.remove('show-message')
    : hiddenElement.classList.add('show-message');
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
        <Link to="/sometest">
          <Button>Back to Dashboard</Button>
        </Link>
        <Button>Add Guest</Button>
      </Container>
    </Container>

    <Container fluid="md" className="high-level-rsvp-data">
      <Row>
        <Col>Invited</Col>
        <Col>Accepted</Col>
        <Col>Declined</Col>
        <Col>Waiting</Col>
      </Row>
      <Row>
        <Col>100</Col>
        <Col>10</Col>
        <Col>15</Col>
        <Col>75</Col>
      </Row>
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
        <tbody>
          <tr onClick={editGuestInfo}>
            <td>1</td>
            <td>Mark Otto</td>
            <td>markotto@gmail.com</td>
            <td>Attending</td>
            <td>
              <Button onClick={readNoteFromGuest}>Note</Button>
            </td>
          </tr>
          <tr className="collapse">
            <td />
            <td>Edit Name</td>
            <td>Edit Email</td>
            <td colSpan="2">
              <Button>Delete Guest</Button>
            </td>
          </tr>
          <tr className="collapse show-message">
            <td colSpan="5">Message from guest.</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  </>
);

export default GuestListMainPage;

{
  /*
Add Header
Add Footer
*/
}
