import React from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar, Container, Row, Col, Image } from 'react-bootstrap';
import BlueButton from '../Common/styled/buttonstyles/BlueButton';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';
import { BMerr18 } from '../Common/styled/textstyles/Merr18';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function BrowseTheme() {
  return (
    <Container className="mt-5">
      <Row>
        <Col xs lg="9">
          <div className="d-flex justify-content-center mb-2">
            <ProgressBar now={50} style={{ width: '50%', color: 'yellow' }} />
          </div>
          <div style={{ marginLeft: '25%' }}>
            <BAlexBrushH1 className="mt-3">Wedding Website</BAlexBrushH1>
            <BFaustinaH3 className="mb-5">
              Welcome to your Wedding Website
            </BFaustinaH3>
            <div className="mt-5">
              <BMerr18>
                <i className="fas fa-gift" /> Customize your invitation with
                themes and colors
              </BMerr18>
              <BMerr18>
                <i className="far fa-star" />
                Add a cover photo and fill your gallery
              </BMerr18>
              <BMerr18>
                <i className="fas fa-mouse-pointer" />
                Write a personal message for your guests
              </BMerr18>
            </div>
            <Link to="/event/1/choose-content">
              <BlueButton className="my-5">browse themes</BlueButton>
            </Link>
          </div>
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
