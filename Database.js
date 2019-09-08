const admin = require('firebase-admin');

let serviceAccount = require('/sfk-app-60b018debbb2.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();
