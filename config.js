import firebase from 'firebase'
require("@firebase/firestore")
var firebaseConfig = {
    apiKey: "AIzaSyCQPRReEOgcogkvsr9IFDPBknJr9kICRsA",
    authDomain: "storyapp-769ab.firebaseapp.com",
    projectId: "storyapp-769ab",
    storageBucket: "storyapp-769ab.appspot.com",
    messagingSenderId: "159336686256",
    appId: "1:159336686256:web:f0bc473414e0379d581175"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()