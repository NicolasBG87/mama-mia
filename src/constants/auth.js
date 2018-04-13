import { auth } from './firebase';
import firebase from 'firebase';

export const authGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider);
}

export const authFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  auth.signInWithPopup(provider);
}