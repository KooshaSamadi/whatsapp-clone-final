import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyAdYVzTr1Y2o6SR4cDQoBUYr6ZGLIyFH74",
  authDomain: "watchsapp-clone.firebaseapp.com",
  projectId: "watchsapp-clone",
  storageBucket: "watchsapp-clone.appspot.com",
  messagingSenderId: "236404895690",
  appId: "1:236404895690:web:e3bf73f13209e8160fe933",
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage().ref("images");
const audioStorage = firebase.storage().ref("audios");
const createTimestamp = firebase.firestore.FieldValue.serverTimestamp;
const serverTimestamp = firebase.database.ServerValue.TIMESTAMP;

export {
  db,
  auth,
  provider,
  storage,
  audioStorage,
  createTimestamp,
  serverTimestamp,
};
