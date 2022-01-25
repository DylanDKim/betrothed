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

  const [numGuests, setNumGuests] = useState('0');
  const [numGifts, setNumGifts] = useState(0);
  const [invitationMade, setInvitationMade] = useState(false);
  const [guestsInvited, setGuestsInvited] = useState(false);

  const { event_id: eventId } = useParams();

  useEffect(() => {
    axios
      .get(`https://betrothed-server.herokuapp.com/api/events/${eventId}`)
      .then((data) => data.data)
      .then((eventData) => {
        setFirstName(eventData.coupleName1);
        setPartnerFirstName(eventData.coupleName2);
        setDaysLeft(2);

        if (Object.keys(eventData.guests).length > 0) {
          setGuestsInvited(true);
          let attendance = 0;
          for (var n in eventData.guests) {
            for (var guest of eventData.guests[n]) {
              if (guest.rsvpStatus === 'attending') {
                attendance++;
              }
            }
          }
          if (attendance > 0) {
            setNumGuests(attendance);
          }
        }

        setInvitationMade(
          eventData.inviteMessage !==
            `Please join us in celebrating our new life together`
        );
      })
      .catch((err) => console.log(err));

    axios
      .get(`https://betrothed-server.herokuapp.com/api/events/${eventId}/gifts`)
      .then((data) => data.data)
      .then((giftArr) => {
        let claimed = 0;
        for (var n of giftArr.gifts) {
          if (n.claimed) {
            claimed++;
          }
        }
        setNumGifts(claimed);
      })
      .catch((err) => console.log(err));
  }, [eventId]);

  return (
    <Container fluid>
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
        <BFaustinaH3 style={{ position: 'absolute', top: '3em', right: '1em' }}>
          13 days left!
        </BFaustinaH3>

        <i className="BsCameraFill " />
      </div>

      <ProgressBar
        style={{ marginTop: '1em' }}
        now={
          (!invitationMade ? 33 : 0) +
          (guestsInvited ? 33 : 0) +
          (numGifts > 0 ? 33 : 0)
        }
      />
      <Row style={{ marginTop: '3em' }}>
        <Col md={{ offset: 1 }}>
          <BFaustinaH2 style={{ marginBottom: '1em' }}>
            Planning tools
          </BFaustinaH2>
        </Col>
      </Row>
      <Row style={{ margin: '.5em 4em 6em 4em' }}>
        <Col className="d-flex justify-content-around">
          <GuestListCard guestsInvited={guestsInvited} numGuests={numGuests} />
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
