'use strict';

const express = require('express');
const pg = require('pg');

const config = require('../config');
const app = express();
const connectUrl = `postgres://${config.PGUSER}:${config.PGPASSWORD}@${config.PGHOST}/${config.PGDATABASE}`;

pg.connect(connectUrl, (err, client, done) => {
  if (err) {
    return console.error(err);
  }
});

app.get('/', (req, res) => {
  res.send('Hello world!');
});

module.exports = app;
