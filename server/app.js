const path = require('path');
const express = require('express');
const { parser } = require('html-metadata-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
