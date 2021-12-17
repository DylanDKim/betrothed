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

app.get('/guestlist', (req, res) => {
  const { eventId } = req.query;
  axios
    .get(`https://betrothed-server.herokuapp.com/api/events/${eventId}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => error);
});

app.post('/guestlist', (req, res) => {
  const { eventId } = req.query;
  const { firstName, lastName, email, group = 'Individual' } = req.body;

  axios
    .post(
      `https://betrothed-server.herokuapp.com/api/events/61b79b9e0ac02dbe3e12fd1b/guests`,
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
