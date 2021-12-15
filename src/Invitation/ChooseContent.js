import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, ProgressBar, Row, Col, Image, Form } from 'react-bootstrap';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';
import { ThemeImg } from './invitation.styled';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChooseContent({ setChosedTheme }) {
  const invitationTheme = [
    'https://images.unsplash.com/photo-1561848355-890d054dc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1553142282-bcc4d3ec4c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1515005318787-cc68052b38f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=844&q=80',
  ];

  const handleClick = (e, urlSource) => {
    console.log(urlSource);
    setChosedTheme(urlSource);
  };
  return (
    <Container className="mt-5" style={{ width: '65%' }}>
      <ProgressBar now={100} />
      <h2>Hello from ChooseContent</h2>
      <Row xs={6} md={3}>
        {(invitationTheme || []).map((url) => (
          <Col>
            <ThemeImg className="w-100 h-100 p-1" src={url} />
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label=""
                onClick={(e) => handleClick(e, url)}
              />
            </Form.Group>
          </Col>
        ))}
      </Row>
      <Link to="/invitation-form">
        <BlueButton className="mt-5">Content</BlueButton>
      </Link>
    </Container>
  );
}
