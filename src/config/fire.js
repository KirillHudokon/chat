import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDzdguoNFtr2rS8ATPs1ZQk_xGJr6MZS7w",
    authDomain: "chat-b8216.firebaseapp.com",
    databaseURL: "https://chat-b8216.firebaseio.com",
    projectId: "chat-b8216",
    storageBucket: "chat-b8216.appspot.com",
    messagingSenderId: "585194928964",
    appId: "1:585194928964:web:400cca8cf4818d040e3511",
    measurementId: "G-GYPS5JXX7R"
  };

const fire  = firebase.initializeApp(firebaseConfig);
const db = fire.firestore();
const auth = fire.auth()
export { db, auth }