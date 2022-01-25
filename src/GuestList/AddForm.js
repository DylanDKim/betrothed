import React, { useState } from 'react';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';

const AddForm = (props) => {
  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [groupValue, setGroupValue] = useState('');

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
  const hangleGVInput = (e) => {
    setGroupValue(e.target.value);
  };

  // Reset Input Field handler
  const resetInputField = () => {
    setFirstNameValue('');
    setLastNameValue('');
    setEmailValue('');
  };

  const handlePostGuest = () => {
    axios
      .post('/addGuestlist', {
        eventId: props.eventId,
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        groupValue: 'groupValue',
      })
      .then((data) => console.log(data.data))
      .then(resetInputField)
      .catch((err) => console.log(err));
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
        <Form.Control
          type="text"
          value={groupValue}
          onChange={setGroupValue}
          placeholder="Create A Group"
        />
      </Form.Group>
      <br />
      <PlumFilledButton
        variant="primary"
        type="submit"
        onClick={handlePostGuest}
      >
        Save & Add Another Guest
      </PlumFilledButton>
    </Form>
  );
};

export default AddForm;
