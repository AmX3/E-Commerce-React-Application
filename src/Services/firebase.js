// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDO6ElAjCSWkL5h3Kn4YVXtPzRwLs8YJFg",
    authDomain: "ecommerce-fbc9f.firebaseapp.com",
    projectId: "ecommerce-fbc9f",
    storageBucket: "ecommerce-fbc9f.appspot.com",
    messagingSenderId: "478795015060",
    appId: "1:478795015060:web:2e6a92dfd7fcb82504a581",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();
export default firestore; // exporting a firebase.firestore.Firestore object
