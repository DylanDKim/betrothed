import React from 'react';
import { Form, Button, Dropdown } from 'react-bootstrap';

const AddForm = () => (
  <Form>
    <Form.Group>
      <Form.Control type="text" placeholder="First Name" required />
      <Form.Control type="text" placeholder="Last Name" required />
      <Form.Control type="email" placeholder="Email" required />
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Choose a group
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Group 1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Group 2</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Group 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Form.Control type="text" placeholder="Group" />
    </Form.Group>
    <Button variant="success" type="submit" block>
      Submit
    </Button>
  </Form>
);

export default AddForm;
