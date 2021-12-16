import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';

const AddForm = () => {
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');

  // Input Field handler
  const handleFNInput = (e) => {
    setFirstNameValue(e.target.value);
  };
  const handleLNInput = (e) => {
    setLastNameValue(e.target.value);
  };
  const handleEMInput = (e) => {
    setEmailValue(e.target.value);
  };

  // Reset Input Field handler
  const resetInputField = () => {
    setFirstNameValue('');
    setLastNameValue('');
    setEmailValue('');
  };

  return (
    <Form>
      <Form.Group>
        <Form.Control
          type="text"
          value={firstNameValue}
          onChange={handleFNInput}
          placeholder="First Name"
          required
        />
        <br />
        <Form.Control
          type="text"
          value={lastNameValue}
          onChange={handleLNInput}
          placeholder="Last Name"
          required
        />
        <br />
        <Form.Control
          type="email"
          value={emailValue}
          onChange={handleEMInput}
          placeholder="Email"
          required
        />
        <br />
        <Form.Select aria-label="Default select example">
          <option>Choose A Group</option>
          <option value="1">Group One</option>
          <option value="2">Group Two</option>
          <option value="3">Group Three</option>
        </Form.Select>
        or
        <Form.Control type="text" placeholder="Create A Group" />
      </Form.Group>
      <br />
      <PlumFilledButton
        variant="primary"
        type="submit"
        onClick={resetInputField}
      >
        Save & Add Another Guest
      </PlumFilledButton>
    </Form>
  );
};

export default AddForm;
