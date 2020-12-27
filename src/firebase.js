import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6BkXNBFfFyybrz-NeJ0dYgTz9iIBawsQ",
  authDomain: "social-app-react-dde41.firebaseapp.com",
  projectId: "social-app-react-dde41",
  storageBucket: "social-app-react-dde41.appspot.com",
  messagingSenderId: "919170771632",
  appId: "1:919170771632:web:1fc77df0f62f91dd5ce975",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
