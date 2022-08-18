import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Inicio FireBase

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDEMxKmlUE3jet2f4po28re7FH45vRhTWY',
	authDomain: 'homebrewpremium.firebaseapp.com',
	projectId: 'homebrewpremium',
	storageBucket: 'homebrewpremium.appspot.com',
	messagingSenderId: '478307358832',
	appId: '1:478307358832:web:0e1a625dfa3680c603fcb5',
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Fin FireBase

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
