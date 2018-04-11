import { auth } from './firebase';
import firebase from 'firebase';

export const authGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(res => alert("Welcome, " + res.user.displayName))
    .catch(err => alert(err));
}

export const authFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider)
    .then(res => alert("Welcome, " + res.user.displayName))
    .catch(err => alert(err));
}