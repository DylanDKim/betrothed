const path = require('path');
const express = require('express');

const app = express();

// Middleware
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Pls Put all other HTTP request above this GET request &&
// Pls use endpoints/routes that is different than the Frond End React Router routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

module.exports = app;
