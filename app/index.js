'use strict';

const express = require('express');

const config = require('../config');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

module.exports = app;
