import firebase from 'firebase';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyArK1OrU5Cf2dFNUiK_aE64-B9Tl9AUeC0",
    authDomain: "movieposting-10f49.firebaseapp.com",
    projectId: "movieposting-10f49",
    storageBucket: "movieposting-10f49.appspot.com",
    messagingSenderId: "699631403559",
    appId: "1:699631403559:web:cb1a5bcbbfb7e717a70402",
    measurementId: "G-CX6Y58DKCY"

});

const db = firebase.firestore();

export default {
    firebase, db
}


