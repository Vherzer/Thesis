import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCqK9sSq58loq5l-lE3RtDFfNe8jfScT5E",
  authDomain: "sfk2-cbaef.firebaseapp.com",
  databaseURL: "https://sfk2-cbaef.firebaseio.com",
  projectId: "sfk2-cbaef",
  storageBucket: "",
  messagingSenderId: "1014798760146",
  appId: "1:1014798760146:web:43e51c27ddb8131b1a550b"
};

const app = firebase.initializeApp(config);
export const db = app.database();
