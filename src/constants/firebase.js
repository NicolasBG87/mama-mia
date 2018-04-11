import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBKqKe8m4Nji-Lq7ewukBx1V9QUHTyh1uo",
  authDomain: "mama-mia-2018.firebaseapp.com",
  databaseURL: "https://mama-mia-2018.firebaseio.com",
  projectId: "mama-mia-2018",
  storageBucket: "mama-mia-2018.appspot.com",
  messagingSenderId: "459887346044"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};