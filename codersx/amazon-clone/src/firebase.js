import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDAFaY5lz2iccC97IG9AM0GTFSKKt8LeLY",
  authDomain: "clone-91ccb.firebaseapp.com",
  databaseURL: "https://clone-91ccb.firebaseio.com",
  projectId: "clone-91ccb",
  storageBucket: "clone-91ccb.appspot.com",
  messagingSenderId: "1034486869671",
  appId: "1:1034486869671:web:55bac172d70dc7d3577582",
  measurementId: "G-WG7GYZR6EB"
})

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };