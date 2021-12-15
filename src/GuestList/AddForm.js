import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddForm = () => (
  <Form>
    <Form.Group>
      <Form.Control type="text" placeholder="Name" required />
      <Form.Control type="text" placeholder="Name" required />
      <Form.Control type="text" placeholder="Name" required />
    </Form.Group>
  </Form>
);

export default AddForm;
