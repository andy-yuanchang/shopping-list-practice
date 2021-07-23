import firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDi-V4gsf6rVD5vVNFdw14ulS5eoT6mICo",
  authDomain: "shopping-cart-4a2be.firebaseapp.com",
  projectId: "shopping-cart-4a2be",
  storageBucket: "shopping-cart-4a2be.appspot.com",
  messagingSenderId: "646938165509",
  appId: "1:646938165509:web:ed2912669eab7cc6a0b76c",
  measurementId: "G-CS9DKF35NE"
});

export const auth = app.auth();
export default app;
