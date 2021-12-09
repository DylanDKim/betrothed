const express = require('express');
const app = express();
const {
  couplesRouter,
  guestsRouter,
  eventsRouter,
  rsvpsRouter,
} = require('./routers');

// Middleware
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
