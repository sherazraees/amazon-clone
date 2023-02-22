import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsPH5YS7TjeZA_0XPMnWc9Ob7xSYI60bg",
  authDomain: "clone-1a7ae.firebaseapp.com",
  projectId: "clone-1a7ae",
  storageBucket: "clone-1a7ae.appspot.com",
  messagingSenderId: "1076177166713",
  appId: "1:1076177166713:web:45a95f38f7b78c34f78fa8",
  measurementId: "G-2J75N9H92C",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
