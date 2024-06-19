// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore, collection, addDoc, updateDoc, doc} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsHX8BbuEAPIy7QJvM1DcXG6E-Rs8AuEs",
  authDomain: "biometric-fingerprint-data.firebaseapp.com",
  projectId: "biometric-fingerprint-data",
  storageBucket: "biometric-fingerprint-data.appspot.com",
  messagingSenderId: "599014374886",
  appId: "1:599014374886:web:ae2e5516cd570654fa2a27",
  measurementId: "G-9HWMBGDJY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db , getFirestore, collection, addDoc, updateDoc, doc}