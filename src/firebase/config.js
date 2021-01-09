import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; 
 
var firebaseConfig = {
  apiKey: "AIzaSyDrTmegSTHGI_0peoopzwg7VfCysF6lKO0",
  authDomain: "tau-now.firebaseapp.com",
  databaseURL: "https://tau-now.firebaseio.com",
  projectId: "tau-now",
  storageBucket: "tau-now.appspot.com",
  messagingSenderId: "1052839433783",
  appId: "1:1052839433783:web:3a6b2f987b486ff465d1b2"
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };