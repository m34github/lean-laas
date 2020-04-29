const cors = require('cors');
const express = require('express');
const uuid = require('uuid');

const { auth, db } = require('../firebase-admin.js');

const app = express();

app.use(cors({ origin: true }));

app.post('/signup', (req, res) => {
  const body = req.body;

  if (Object.keys(body).length) {
    if (body.email && body.password) {
      auth.createUser({
        email: body.email,
        password: body.password
      })
      .then(user => {
        const apiKey = uuid.v4();

        db.collection('users').doc(user.uid).add({
          email: user.email,
          name: user.displayName,
          apiKey
        })
        .then(ref => {
          res.send(`Welcome to LaaS!\n
          Your account has been successfuly created.\n
          Your API key is the below.\n
          ----------\n
          ${apiKey}`);
        })
        .catch(error => {
          res.send('[ERROR]', error);
        });
      })
      .catch(error => {
        res.send('[ERROR]', error);
      });

    } else {
      res.send('[ERROR] email or password is null.');
    }
  } else {
    res.send('[ERROR] body is null.');
  }
});

app.get('/get-api-key', (req, res) => {
  const body = req.body;

  res.send(body);
});

module.exports = app;
