// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxYQwJ-c2px0oYKvMHgjsc9ZgFpssUMrU",
    authDomain: "e-commerce-74d3f.firebaseapp.com",
    projectId: "e-commerce-74d3f",
    storageBucket: "e-commerce-74d3f.appspot.com",
    messagingSenderId: "425347734408",
    appId: "1:425347734408:web:24e1d27a5370b3aca3b83d",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore; // exporting a firebase.firestore.Firestore object
