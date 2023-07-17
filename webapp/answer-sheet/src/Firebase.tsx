// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABmgDCgf4za_hbFOjn5O5JhgGfUHDx-MI",
  authDomain: "answer-sheet-212b9.firebaseapp.com",
  projectId: "answer-sheet-212b9",
  storageBucket: "answer-sheet-212b9.appspot.com",
  messagingSenderId: "226541361381",
  appId: "1:226541361381:web:8afcab3417370f74b19c0c",
  measurementId: "G-BK9DG8BWY7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);