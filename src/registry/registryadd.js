import React, { useState } from 'react';
import { Carousel, Container, Row, Col, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';

import PlumButton from '../Common/styled/buttonstyles/PlumButton';

export default function ResgistryAdd() {
  const [registry, setRegistry] = useState([]);
  const [registryItem, setRegistryItem] = useState({});
  const [modalOn, setModalOn] = useState(false);

  const handleClose = () => setModalOn(false);
  // const handleShow = () => setModalOn(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={6}>
          <h1 style={{ fontSize: '64px', fontFamily: 'Alex Brush' }}>
            Registry
          </h1>
        </Col>
        <Col md={3} className="mr-1 pr-1">
          <div style={{ float: 'right' }}>
            <h2
              style={{
                fontSize: '24px',
                fontFamily: 'Faustina serif',
              }}
            >
              {registry.length} {registry.length === 1 ? 'Gift' : 'Gifts'}{' '}
              Requested
            </h2>
            0 Purchased
          </div>
        </Col>
        <Col md={3} className="ml-1">
          {modalOn ? (
            <PlumFilledButton type="button" className="float-right">
              add gifts
            </PlumFilledButton>
          ) : (
            <PlumButton
              onClick={() => setModalOn(true)}
              type="button"
              className="float-right"
            >
              add gifts
            </PlumButton>
          )}
        </Col>
      </Row>
      <Row>
        <h2
          style={{
            fontSize: '24px',
            fontFamily: 'Faustina serif',
          }}
        >
          Your Top Gifts
        </h2>
        {registry.length === 0 ? (
          <h3>You have NOOOO gifts in your registry! Try adding some.</h3>
        ) : (
          <h3>You have {registry.length} gifts in your registry!</h3>
        )}

        <button
          type="button"
          onClick={() => setRegistry([...registry, 'five'])}
        >
          Click
        </button>
      </Row>
      <Row>
        <h2
          style={{
            fontSize: '24px',
            fontFamily: 'Faustina serif',
          }}
        >
          Browse by category
        </h2>
      </Row>
      <Row>
        <h2
          style={{
            fontSize: '24px',
            fontFamily: 'Faustina serif',
          }}
        >
          Claimed
        </h2>
        <Modal show={modalOn} closeButton={false} onHide={handleClose}>
          <Modal.Body style={{ backgroundColor: '#8B5B6E' }}>
            <Row>
              <h3
                style={{
                  color: 'white',
                  fontSize: '36px',
                  fontFamily: 'Faustina serif',
                }}
              >
                Add more gifts
              </h3>
            </Row>
            <Row>
              <form id="registry" onSubmit={(e) => handleSubmit(e)}>
                <Row>
                  <Col>
                    <label htmlFor="category">
                      <span
                        style={{
                          color: 'white',
                          fontSize: '24px',
                          fontFamily: 'Faustina serif',
                        }}
                      >
                        category
                      </span>
                      <br />
                      <input type="text" name="category" />
                    </label>
                  </Col>
                  <Col>
                    <label htmlFor="url">
                      <span
                        style={{
                          color: 'white',
                          fontSize: '24px',
                          fontFamily: 'Faustina serif',
                        }}
                      >
                        url
                      </span>
                      <br />
                      <input type="text" name="url" />
                    </label>
                  </Col>
                </Row>
              </form>
            </Row>
            <Row>
              <Col>
                <PlumFilledButton
                  type="submit"
                  form="registry"
                  style={{ float: 'right', border: '1px solid white' }}
                  className="float-right mt-3"
                  variant="primary"
                  onClick={handleClose}
                >
                  Save Changes
                </PlumFilledButton>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Row>
    </Container>
  );
}
