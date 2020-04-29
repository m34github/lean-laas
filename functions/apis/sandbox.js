const cors = require('cors');
const express = require('express');

const { db } = require('../firebase-admin.js');

const app = express();

app.use(cors({ origin: true }));

app.get('/ping', (req, res) => {
  res.send('sandbox pong');
});

app.post('/create', async (req, res) => {
  const result = await db.collection('sandbox').add({
    id: 'hello',
    name: 'alice'
  }).catch(error => error);
  console.log(result);
  res.send(result);
});

module.exports = app;
