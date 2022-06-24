import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";

import App from './App';


const APP_KEY = process.env.REACT_APP_API_KEY;
const MSG_SENDER_ID = process.env.REACT_APP_MSG_SENDER_ID;
const APP_ID = process.env.REACT_APP_APP_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APP_KEY,
  authDomain: "vishal-borker.firebaseapp.com",
  projectId: "vishal-borker",
  storageBucket: "vishal-borker.appspot.com",
  messagingSenderId: MSG_SENDER_ID,
  appId: APP_ID
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
