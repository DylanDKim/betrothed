const path = require('path')
const express = require('express');
const app = express();

// Middleware
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// Put all other request above this GET request
app.get('/*', (req, res) => {
  console.log('look here ------------')
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

module.exports = app;

