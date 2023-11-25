import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBjQIMqYY3mLcvUIjIUkAG9l8cQ3BotBQ",
  authDomain: "url-shortener-57093.firebaseapp.com",
  projectId: "url-shortener-57093",
  storageBucket: "url-shortener-57093.appspot.com",
  messagingSenderId: "864496689041",
  appId: "1:864496689041:web:9e94bfe211cda57253c430",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const userCollectionRef = collection(db, "users");
