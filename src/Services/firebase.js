// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDDvny1ZMud8TL4OwWXcHwzcJO_vHyKkCg",
    authDomain: "final-ef152.firebaseapp.com",
    projectId: "final-ef152",
    storageBucket: "final-ef152.appspot.com",
    messagingSenderId: "900635413555",
    appId: "1:900635413555:web:2afe42e85aa40809a12746",
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore; // exporting a firebase.firestore.Firestore object
