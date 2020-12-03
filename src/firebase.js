import firebase from "firebase";

const firebaseApp =firebase.initializeApp({

	apiKey: "AIzaSyBZWKYQGECgIGYqDTRpbcVcCeKkWxbPbyY",
  authDomain: "fb-massanger-2fb9b.firebaseapp.com",
  databaseURL: "https://fb-massanger-2fb9b.firebaseio.com",
  projectId: "fb-massanger-2fb9b",
  storageBucket: "fb-massanger-2fb9b.appspot.com",
  messagingSenderId: "949353684112",
  appId: "1:949353684112:web:a13fbe54dffe405106cc15",
  measurementId: "G-BLX3HVRDK2"
});
const db = firebaseApp.firestore();
export default db;