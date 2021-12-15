import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, ProgressBar, Row, Col, Image } from 'react-bootstrap';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';
import { ThemeImg } from './invitation.styled';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ChooseContent({ setChosedTheme }) {
  const invitationTheme = [
    'https://images.unsplash.com/photo-1561848355-890d054dc55a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1553142282-bcc4d3ec4c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1515005318787-cc68052b38f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=844&q=80',
  ];
  const [selectedStyle, setSelectedStyle] = useState({
    cursor: 'pointer',
    border: '1px gray solid',
    // &.marked {
    //   color: rgb(179, 0, 0);
    //   text-decoration: none;
    //   cursor: auto;
    //   &:active {
    //     transform: none;
    //   }
    // }
  });
  const handleClick = (e) => {
    setSelectedStyle({
      cursor: 'pointer',
      border: '2px red solid',
    });
    // console.log('before', e.target.style);
    // e.target.style = { border: '2px red solid' };
    // console.log('after', e.target.style);
    console.log(e.target.src);
    setChosedTheme(e.target.src);
  };
  return (
    <Container className="mt-5" style={{ width: '65%' }}>
      <ProgressBar now={100} />
      <h2>Hello from ChooseContent</h2>
      <Row xs={6} md={3}>
        {(invitationTheme || []).map((url) => (
          <Col>
            <ThemeImg
              className="w-100 h-100 p-1"
              src={url}
              onClick={handleClick}
            />
            {/* <Image
              className="w-100 h-100 p-1"
              src={url}
              rounded
              onClick={handleClick}
              style={selectedStyle}
            /> */}
          </Col>
        ))}
      </Row>
      <Link to="/invitation-form">
        <BlueButton>Content</BlueButton>
      </Link>
    </Container>
  );
}
