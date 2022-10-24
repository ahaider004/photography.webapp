import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBjLRsq0LXiPVGBiFutMyOgrg8s5HMtprQ",
    authDomain: "adil-rahman.firebaseapp.com",
    projectId: "adil-rahman",
    storageBucket: "adil-rahman.appspot.com",
    messagingSenderId: "755282142431",
    appId: "1:755282142431:web:be1fe2c37dd0d2bfd2f56a"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };