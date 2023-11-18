import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyACGW8N9mkkqG7v_fxwd21Pjkfno6QJWh4",
    authDomain: "dashboard-ecommerce-86bba.firebaseapp.com",
    projectId: "dashboard-ecommerce-86bba",
    storageBucket: "dashboard-ecommerce-86bba.appspot.com",
    messagingSenderId: "1089023303616",
    appId: "1:1089023303616:web:c65c2c47f1fcbfb2f93225",
    measurementId: "G-0B3HPTS12Y"
  };

  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const fs = firebase.firestore();
  const storage = firebase.storage();

  export {auth, fs, storage}