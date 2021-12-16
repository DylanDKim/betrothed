import React, { useState } from 'react';
import { Card, Container, Row, Col, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import PlumFilledButton from '../Common/styled/buttonstyles/PlumFilledButton';
import PlumButton from '../Common/styled/buttonstyles/PlumButton';

export default function ResgistryAdd() {
  const [registry, setRegistry] = useState([]);
  const [registryItem, setRegistryItem] = useState({});
  const [modalOn, setModalOn] = useState(false);
  const [claimed, setClaimed] = useState([]);

  const handleClose = () => setModalOn(false);
  // const handleShow = () => setModalOn(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistryItem((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleClick = (url) => {
    window.location.assign(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { category } = registryItem;
    axios.post('/registry', registryItem).then((results) => {
      const { meta } = results.data;

      setRegistry((prevState) => [
        ...prevState,
        { url: meta.url, title: meta.title, category: category },
      ]);
    });
  };

  return (
    <Container style={{ height: '66.5vh', boxsizing: ' border-box' }}>
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
            {claimed.length} Purchased
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
          <h3>You have no gifts in your registry! Try adding some.</h3>
        ) : (
          registry.map((item) => (
            <Card
              style={{
                width: '18rem',
                border: '5px solid #8b5b6e',
                marginBottom: '2%',
                marginRight: '2%',
              }}
            >
              <Card.Body>
                <Card.Title>{item.category}</Card.Title>
                <Card.Text style={{ height: '8rem' }}>{item.title}</Card.Text>

                <PlumButton
                  name={item.title}
                  onClick={() => handleClick(item.url)}
                  className="float-right"
                  style={{
                    float: 'right',
                  }}
                  variant="primary"
                >
                  View
                </PlumButton>
              </Card.Body>
            </Card>
          ))
        )}
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
                        name
                      </span>
                      <br />
                      <input
                        required
                        type="text"
                        name="category"
                        onChange={handleChange}
                      />
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
                      <input
                        required
                        type="text"
                        name="url"
                        onChange={handleChange}
                      />
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
                  Submit
                </PlumFilledButton>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Row>
    </Container>
  );
}
