import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*
// firebase
import firebase from "firebase/app";
import "firebase/database"; // for Realtime Database
import "firebase/firestore"; // for Firestore
import firebaseConfig from "./firebase_setup/firebaseConfig.jsx";
*/


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
