import firebase from 'firebase';

firebase.initializeApp({
  apiKey: "AIzaSyCyYQIWoLhlFUvsDNycNcAAoxqaykRD4CE",
  authDomain: "pets-bd288.firebaseapp.com",
  databaseURL: "https://pets-bd288.firebaseio.com",
  projectId: "pets-bd288",
  storageBucket: "pets-bd288.appspot.com",
  messagingSenderId: "545157199303",
  appId: "1:545157199303:web:d415969ea05d77759155e2",
  measurementId: "G-WQRYYYDJS5"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
 
export {db,auth,storage}