import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDhUHoAKQI9tx02gBu4bqN1-weUkZbCQfI",
  authDomain: "firechat-3b219.firebaseapp.com",
  projectId: "firechat-3b219",
  storageBucket: "firechat-3b219.appspot.com",
  messagingSenderId: "1053907100314",
  appId: "1:1053907100314:web:f94d9c15c6b06c9c877523",
  measurementId: "G-1HBMEYWW81"
  });
  
const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }