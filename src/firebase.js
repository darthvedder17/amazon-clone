import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({


	
	  apiKey: "AIzaSyDHEML22jwiPIw5NcmP4h6udhGaUsYyTlw",
	  authDomain: "clone-a13ee.firebaseapp.com",
	  databaseURL: "https://clone-a13ee.firebaseio.com",
	  projectId: "clone-a13ee",
	  storageBucket: "clone-a13ee.appspot.com",
	  messagingSenderId: "347057601749",
	  appId: "1:347057601749:web:39e90ecfa5c9565efc365c",
	  measurementId: "G-5XQVBWDVRJ"






});



const auth = firebase.auth();

export {auth};