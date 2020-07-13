import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyAIaQmCT_Btf9fCA--mFI8MN9FdReD0y6g",
    authDomain: "instagram-clone-d70a9.firebaseapp.com",
    databaseURL: "https://instagram-clone-d70a9.firebaseio.com",
    projectId: "instagram-clone-d70a9",
    storageBucket: "instagram-clone-d70a9.appspot.com",
    messagingSenderId: "934193729896",
    appId: "1:934193729896:web:244232f5018bddb81306dd",
    measurementId: "G-8F79VELN94"
});

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
 
export {db,auth,storage}