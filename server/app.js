const express = require('express');
const app = express();

// Middleware
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

module.exports = app;
