const path = require('path');
const express = require('express');
const { parser } = require('html-metadata-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

// Middleware
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/event', (req, res) => {
  console.log('now using server route for posting event');

  const {
    firstName,
    partnerFirstName,
    email,
    weddingDate,
    venue,
    addressLine1,
    addressLine2,
    city,
    state,
    zip,
    guestLimit,
    rsvpDeadline,
    inviteMessage,
  } = req.body;

  axios
    .post(`https://betrothed-server.herokuapp.com/api/events`, {
      coupleName1: firstName,
      coupleName2: partnerFirstName,
      email: email,
      date: weddingDate,
      venue: venue,
      addressLine1: addressLine1,
      addressLine2: addressLine2,
      city: city,
      state: state,
      zip: zip,
      guestLimit: guestLimit,
      rsvpDeadline: new Date(rsvpDeadline).toISOString(),
      inviteMessage: inviteMessage,
    })
    .then(({ data }) => {
      res.status(200).send(data.data);
      // const navigate = useNavigate();
      // navigate(`/event/${data.data._id}/dashboard`);
    })
    .catch((err) => console.log(err));
});

app.get('/eventData', (req, res) => {
  console.log('now using server route for Event Data');
  axios
    .get(`https://betrothed-server.herokuapp.com/api/events/${eventId}`)
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => console.log(err));
});

app.get('/guestlist', (req, res) => {
  const { eventId } = req.query;
  axios
    .get(`https://betrothed-server.herokuapp.com/api/events/${eventId}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => error);
});

app.post('/addGuestlist', (req, res) => {
  const {
    eventId,
    firstName,
    lastName,
    email,
    group = 'Individual',
  } = req.body;
  axios
    .post(
      `https://betrothed-server.herokuapp.com/api/events/${eventId}/guests`,
      {
        firstName,
        lastName,
        email,
        group,
      }
    )
    .then((response) => {
      res.status(201).send(response.data);
    })
    .catch((error) => console.log(error));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.post('/registry', (req, res) => {
  const { url } = req.body;
  parser(url).then((result) => {
    res.status(200).send(result);
  });
});

module.exports = app;
