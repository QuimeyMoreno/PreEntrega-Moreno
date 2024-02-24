import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHgGyDiCr55nV9qZaFqfLjLBNfH0wkA_Y",
  authDomain: "coderhouse-proyectofinal.firebaseapp.com",
  projectId: "coderhouse-proyectofinal",
  storageBucket: "coderhouse-proyectofinal.appspot.com",
  messagingSenderId: "75618582428",
  appId: "1:75618582428:web:163772c78574ab2a5a1259"
};

// Initialize Firebase
initializeApp(firebaseConfig);
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
