// The core Firebase JS SDK is always required and must be listed first
// <script src="https://www.gstatic.com/firebasejs/7.3.0/firebase-app.js"></script>

// TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries
// <script src="https://www.gstatic.com/firebasejs/7.3.0/firebase-analytics.js"></script>

import firebase from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6NpwhgFpfZmok7D1ZvVcX18Swyq4idHo",
  authDomain: "nuca-c3dd5.firebaseapp.com",
  databaseURL: "https://nuca-c3dd5.firebaseio.com",
  projectId: "nuca-c3dd5",
  storageBucket: "nuca-c3dd5.appspot.com",
  messagingSenderId: "1002924279705",
  appId: "1:1002924279705:web:1c69046c5b8f4b649af508",
  measurementId: "G-MYXH0KZG13"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

export default firebase;
