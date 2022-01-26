// // Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtychAqeuALOHvR8IGpvPfvR33dxc0MC0",
  authDomain: "ranqueamento-estancias-dev.firebaseapp.com",
  projectId: "ranqueamento-estancias-dev",
  storageBucket: "ranqueamento-estancias-dev.appspot.com",
  messagingSenderId: "38272185509",
  appId: "1:38272185509:web:2ab2bf9509817ab3ad894c",
  measurementId: "G-24ZCCLQ0RR",
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth(app);

export const db = getFirestore();

export const storage = getStorage(app);
