import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA6wAldS_krQ-AtLdD1zAmRtodfkfFXdUE",
    authDomain: "petter-2cb73.firebaseapp.com",
    databaseURL: "https://petter-2cb73.firebaseio.com",
    projectId: "petter-2cb73",
    storageBucket: "petter-2cb73.appspot.com",
    messagingSenderId: "1012791043513"
  };
const fire = firebase.initializeApp(config);
export default fire;