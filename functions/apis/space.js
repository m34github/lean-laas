const cors = require('cors');
const express = require('express');
const uuid = require('uuid');

const { auth, db } = require('../firebase-admin.js');

const app = express();

app.use(cors({ origin: true }));

app.post('/create', (req, res) => {
  const body = req.body;

  if (body.apiKey) {
    res.send('ok');
  } else {
    res.send('[ERROR] body is null.');
  }
});

export default app;
