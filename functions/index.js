const functions = require('firebase-functions');

const auth = require('./apis/auth.js');
const space = require('./apis/space.js');
const sandbox = require('./apis/sandbox.js');

const onRequest = functions.region('asia-northeast1').https.onRequest;

module.exports = {
  auth: onRequest(auth),
  space: onRequest(space),
  sandbox: onRequest(sandbox)
};
