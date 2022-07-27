import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuW7EdOnd6g4gwJDEkUPE1Z9NwCBWRxTc",
  authDomain: "weekend-b3e85.firebaseapp.com",
  databaseURL:
    "https://weekend-b3e85-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "weekend-b3e85",
  storageBucket: "weekend-b3e85.appspot.com",
  messagingSenderId: "487908130535",
  appId: "1:487908130535:web:4246b988c525022423ac42",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
