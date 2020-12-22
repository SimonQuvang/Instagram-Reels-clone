import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoiMgFmMOvqwb-9d1KmWVQguXrjxWMz4c",
    authDomain: "ig-reels-9e53a.firebaseapp.com",
    projectId: "ig-reels-9e53a",
    storageBucket: "ig-reels-9e53a.appspot.com",
    messagingSenderId: "952145295055",
    appId: "1:952145295055:web:5104169066aa73306629ba",
    measurementId: "G-DYB6R3YCWY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();


export default database; 