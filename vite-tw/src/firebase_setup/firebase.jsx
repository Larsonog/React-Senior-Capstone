// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMbFjbPYaVM23A7I8oT-_KCsbtWsLqzNw",
  authDomain: "encylopedia-conway.firebaseapp.com",
  databaseURL: "https://encylopedia-conway-default-rtdb.firebaseio.com",
  projectId: "encylopedia-conway",
  storageBucket: "encylopedia-conway.appspot.com",
  messagingSenderId: "307931392673",
  appId: "1:307931392673:web:9c40c1b6db656eb91edee0",
  measurementId: "G-T4H45R2EBN"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const database = firebase.database();