import React from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar, Container, Row, Col, Image } from 'react-bootstrap';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BrowseTheme() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs lg="9" className="text-center">
          <div className="d-flex justify-content-center mb-2">
            <ProgressBar now={50} style={{ width: '50%' }} />
          </div>
          <BAlexBrushH1>Wedding Website</BAlexBrushH1>
          <h2>Welcome to your Wedding Website</h2>
          <div className="mt-5">
            <h5>
              <i className="fas fa-gift" /> Customize your invitation with
              themes and colors
            </h5>
            <h5>
              <i className="far fa-star" />
              Add a cover photo and fill your gallery
            </h5>
            <h5>
              <i className="fas fa-mouse-pointer" />
              Write a personal message for your guests
            </h5>
          </div>
          <Link to="/event/1/choose-content">
            <BlueButton className="my-5">browse themes</BlueButton>
          </Link>
        </Col>
        <Col>
          <Image
            src="https://images.unsplash.com/photo-1602705399214-d2fed251f3b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
}
