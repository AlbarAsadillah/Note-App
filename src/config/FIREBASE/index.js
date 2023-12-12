import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyC3ThF6xRNpdebbKT_Bma4Q5fgjlztMF8Q",
    authDomain: "note-app-37d1f.firebaseapp.com",
    databaseURL: "https://note-app-37d1f-default-rtdb.firebaseio.com",
    projectId: "note-app-37d1f",
    storageBucket: "note-app-37d1f.appspot.com",
    messagingSenderId: "934263536572",
    appId: "1:934263536572:web:764f7ab5a00b63803749b9"  
});

const FIREBASE = firebase;

export default FIREBASE;