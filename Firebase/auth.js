// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtychAqeuALOHvR8IGpvPfvR33dxc0MC0",
  authDomain: "ranqueamento-estancias-dev.firebaseapp.com",
  projectId: "ranqueamento-estancias-dev",
  storageBucket: "ranqueamento-estancias-dev.appspot.com",
  messagingSenderId: "38272185509",
  appId: "1:38272185509:web:2ab2bf9509817ab3ad894c",
  measurementId: "G-24ZCCLQ0RR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default Firebase(app);
