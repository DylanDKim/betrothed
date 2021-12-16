import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Col, Row, ProgressBar, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import RegistryCard from './RegistryCard';
import InvitationCard from './InvitationCard';
import GuestListCard from './GuestListCard';
import { BAlexBrushH1 } from '../Common/styled/textstyles/AlexBrushH1';
import { BFaustinaH3 } from '../Common/styled/textstyles/FaustinaH3';
import { BFaustinaH2 } from '../Common/styled/textstyles/FaustinaH2';

export default function Dashboard(props) {
  const [firstName, setFirstName] = useState('John');
  const [partnerFirstName, setPartnerFirstName] = useState('Jane');
  const [daysLeft, setDaysLeft] = useState('2');
  const [progress, setProgress] = useState(0);

  const [numGuests, setNumGuests] = useState(0);
  const [numGifts, setNumGifts] = useState('');
  const [invitationMade, setInvitationMade] = useState('');

  const { event_id: eventId } = useParams();

  useEffect(() => {
    axios
      .get(`https://betrothed-server.herokuapp.com/api/events/${eventId}`)
      .then((data) => data.data)
      .then((eventData) => {
        console.log(eventData);
        setFirstName(eventData.coupleName1);
        setPartnerFirstName(eventData.coupleName2);
        setDaysLeft(2);
        setNumGifts();
        setInvitationMade();

        if (!(eventData.guests === null)) {
          let attendance = 0;
          for (var n in eventData.guests) {
            for (var guest of eventData.guests[n]) {
              if (guest.rsvpStatus === 'attending') {
                attendance++;
              }
            }
          }
          setNumGuests(attendance);
        }

        setInvitationMade(eventData.inviteMessage === '');
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://betrothed-server.herokuapp.com/api/events/${eventId}/gifts`)
      .then((data) => data.data)
      .then((giftArr) => {
        let claimed = 0;
        console.log(giftArr.gifts);
        for (var n of giftArr.gifts) {
          console.log(n);
          console.log(n.claimed);
          if (n.claimed) {
            claimed++;
          }
        }
        console.log(claimed);
        setNumGifts(claimed);
      })
      .catch((err) => console.log(err));
  }, [eventId]);

  return (
    <Container fluid>
      <h1>event_id is: {eventId}</h1>
      {/* <Row
        className="d-flex justify-content-between"
        style={{ marginTop: '3em' }}
      >
        <Col md={{ offset: 1 }}>
          <BAlexBrushH1>
            {firstName} and {partnerFirstName}
          </BAlexBrushH1>
        </Col>
        <Col className="d-flex justify-content-end">
          <BFaustinaH3>{daysLeft} days left!</BFaustinaH3>
        </Col>
      </Row> */}
      <div
        style={{
          height: '26em',
          backgroundColor: 'grey',
          position: 'relative',
          textAlign: 'center',
        }}
      >
        <img
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            objectPosition: '0 70%',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          src="https://images.unsplash.com/photo-1566838318109-a8bffb91d082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="dashboard cover"
        />
        <BAlexBrushH1 style={{ position: 'absolute', top: '1em', left: '3em' }}>
          {firstName} and {partnerFirstName}
        </BAlexBrushH1>
        <BFaustinaH3 style={{ position: 'absolute', top: '1em', right: '1em' }}>
          Add a photo
        </BFaustinaH3>
        <BFaustinaH3 style={{ position: 'absolute', top: '3em', right: '1em' }}>
          {daysLeft} days left!
        </BFaustinaH3>

        <i className="BsCameraFill " />
      </div>

      <ProgressBar style={{ marginTop: '1em' }} now={progress} />
      <Row style={{ marginTop: '3em' }}>
        <Col md={{ offset: 1 }}>
          <BFaustinaH2 style={{ marginBottom: '1em' }}>
            Planning tools
          </BFaustinaH2>
        </Col>
      </Row>
      <Row style={{ margin: '.5em 4em 6em 4em' }}>
        <Col className="d-flex justify-content-around">
          <GuestListCard numGuests={numGuests} />
        </Col>
        <Col className="d-flex justify-content-around">
          <InvitationCard invitationMade={invitationMade} />
        </Col>
        <Col className="d-flex justify-content-around">
          <RegistryCard numGifts={numGifts} />
        </Col>
      </Row>
    </Container>
  );
}
