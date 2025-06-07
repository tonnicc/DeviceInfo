// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCoQoBh-5-5pOATQHpY-wPtWexJmn73_bU",
  authDomain: "tonick-info.firebaseapp.com",
  databaseURL: "https://tonick-info-default-rtdb.firebaseio.com",
  projectId: "tonick-info",
  storageBucket: "tonick-info.appspot.com",
  messagingSenderId: "470162575097",
  appId: "1:470162575097:web:c0e66b9f694cf41477dc28",
  measurementId: "G-EPCZ6SB3BH"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, onValue };
