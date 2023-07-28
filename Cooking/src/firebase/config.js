

import firebase from "firebase";
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyDZsevJhxpz3Q7V5MwnHCRevNXkuHRn3H8",
  authDomain: "cooking-bf9d6.firebaseapp.com",
  projectId: "cooking-bf9d6",
  storageBucket: "cooking-bf9d6.appspot.com",
  messagingSenderId: "372799018063",
  appId: "1:372799018063:web:9b5c5cee2ec8d16a35863a",
  measurementId: "G-R0Z3XZM8EX"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export {projectFirestore}
