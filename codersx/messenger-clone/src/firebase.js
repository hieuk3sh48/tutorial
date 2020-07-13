import firebase from 'firebase';

const firebaseApp =firebase.initializeApp ({
    apiKey: "AIzaSyC7YBEUc1WdlaNsQB3G4YpYw_YB7xkJits",
    authDomain: "messeger-clone.firebaseapp.com",
    databaseURL: "https://messeger-clone.firebaseio.com",
    projectId: "messeger-clone",
    storageBucket: "messeger-clone.appspot.com",
    messagingSenderId: "160399762024",
    appId: "1:160399762024:web:3c1c56c3b6214e575ed1dd",
    measurementId: "G-ZV6996F21W"
  });

const db = firebaseApp.firestore();

export default db;