import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, ProgressBar, Row, Col, Form } from 'react-bootstrap';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';
import { ThemeImg } from './invitation.styled';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChooseContent({ setChosedTheme }) {
  const invitationTheme = [
    'https://images.unsplash.com/photo-1508717272800-9fff97da7e8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80',
    'https://images.unsplash.com/photo-1514064019862-23e2a332a6a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1428&q=80',
    'https://images.unsplash.com/photo-1515005318787-cc68052b38f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=844&q=80',
  ];
  const { event_id: eventId } = useParams();
  const inviteFormLink = `/event/${eventId}/invitation-form`;

  const handleClick = (e, urlSource) => {
    console.log('handleClick', urlSource);
    setChosedTheme(urlSource);
  };
  return (
    <Container className="mt-5" style={{ width: '60%' }}>
      <ProgressBar now={100} variant="success" className="mb-3" />
      <BFaustinaH3 className="mt-3 mb-5">Choose Your Design</BFaustinaH3>
      <div>
        <Row xs={6} md={3}>
          {(invitationTheme || []).map((url) => (
            <Col>
              <ThemeImg className="w-100 h-100 p-1" src={url} />
              <Form.Group className="mb-5" controlId="formBasicCheckbox">
                <div className="d-flex justify-content-center">
                  <Form.Check
                    type="checkbox"
                    label=""
                    onClick={(e) => handleClick(e, url)}
                  />
                </div>
              </Form.Group>
            </Col>
          ))}
        </Row>
      </div>
      <Link to={inviteFormLink}>
        <BlueButton className="my-5">Content</BlueButton>
      </Link>
    </Container>
  );
}
