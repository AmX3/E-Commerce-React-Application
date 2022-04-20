// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXtaTuy0vANvl2d2-GaCznU4St0spdI60",
    authDomain: "koicake-ae3e9.firebaseapp.com",
    projectId: "koicake-ae3e9",
    storageBucket: "koicake-ae3e9.appspot.com",
    messagingSenderId: "716117661502",
    appId: "1:716117661502:web:03dd9293ea5e1016adfe6f",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore; // exporting a firebase.firestore.Firestore object
