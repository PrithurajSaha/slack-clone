import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCq3AlGInayrLJH0A_rm3ZEA48BMFk8mFw",
  authDomain: "slack-clone-reactchallenge.firebaseapp.com",
  projectId: "slack-clone-reactchallenge",
  storageBucket: "slack-clone-reactchallenge.appspot.com",
  messagingSenderId: "695924706033",
  appId: "1:695924706033:web:53bf1eb89aba44cf727750",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
