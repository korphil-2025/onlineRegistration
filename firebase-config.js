import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBhT0MOyXWrQ_6iUYHwIssQi53TjXqE62E",
  authDomain: "onlineregistration-a380e.firebaseapp.com",
  databaseURL: "https://onlineregistration-a380e-default-rtdb.firebaseio.com",
  projectId: "onlineregistration-a380e",
  storageBucket: "onlineregistration-a380e.firebasestorage.app",
  messagingSenderId: "260517153442",
  appId: "1:260517153442:web:3a2b6a254c994a346ae5fb",
  measurementId: "G-WJVVNTY0M1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rtdb = getDatabase(app);

export { app, db, rtdb, firebaseConfig };
