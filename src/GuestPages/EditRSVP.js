import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditRsvp = () => {
  const [isEditing, enableEdits] = useState(false);

  return (
    <Container className="d-flex justify-content-center w-50 mt-3">
      Edit part of form
    </Container>
  );
};

export default EditRsvp;
