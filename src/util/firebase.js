import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyA5WLzSyEhtzwqHCCq_bYHyz8RUT5qHE4E",
    authDomain: "lively-rtd.firebaseapp.com",
    databaseURL: "https://lively-rtd-default-rtdb.firebaseio.com",
    projectId: "lively-rtd",
    storageBucket: "lively-rtd.appspot.com",
    messagingSenderId: "227334457382",
    appId: "1:227334457382:web:f658228aac6450413a7ee7",
    measurementId: "G-CJVMN8Y3HE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;