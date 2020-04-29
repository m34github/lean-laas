const admin = require('firebase-admin');

const config = require('./.env/firebase-config.js');

admin.initializeApp(config);

const auth = admin.auth();
const db = admin.firestore();

module.exports = {
  auth,
  db
};
