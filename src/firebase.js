import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDn7yIn7BJkci3qkY_gb67OpPyLWrLTetk",
  authDomain: "instagram-clone-18bb4.firebaseapp.com",
  projectId: "instagram-clone-18bb4",
  storageBucket: "instagram-clone-18bb4.appspot.com",
  messagingSenderId: "964147586951",
  appId: "1:964147586951:web:14f27e77bbd9d2d8261522",
  measurementId: "G-9RTNPNKJ82"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
