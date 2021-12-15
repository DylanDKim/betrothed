import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ProgressBar,
  Card,
  CardGroup,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChooseContent() {
  const invitationTheme = [
    'https://images.unsplash.com/photo-1561848355-890d054dc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1553142282-bcc4d3ec4c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1515005318787-cc68052b38f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=844&q=80',
  ];
  return (
    <Container className="mt-5" style={{ width: '65%' }}>
      <ProgressBar now={100} />
      <h2>Hello from ChooseContent</h2>
      {/* <CardGroup>
        {(invitationTheme || []).map((url) => (
          <Card>
            <Card.Img
              src={url}
              alt="theme"
              variant="top"
              className="w-100 h-100 p-2"
            />
          </Card>
        ))}
      </CardGroup> */}
      <Row xs={6} md={3}>
        {(invitationTheme || []).map((url) => (
          <Col>
            <Image className="w-100 h-100 p-1" src={url} rounded />
          </Col>
        ))}
      </Row>
      <Link to="/invitation-form">
        <BlueButton>Content</BlueButton>
      </Link>
    </Container>
  );
}
