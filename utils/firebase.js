// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhHpvdlK5VnENPdcdBgBRa9XtR6qqPCNY",
  authDomain: "loresellerreg.firebaseapp.com",
  projectId: "loresellerreg",
  storageBucket: "loresellerreg.firebasestorage.app",
  messagingSenderId: "807337521757",
  appId: "1:807337521757:web:b5dae95238854bc3f393b4",
  measurementId: "G-KBLMW54VWT",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
