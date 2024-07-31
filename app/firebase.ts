// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJRVF4228q-8xu4JiYopFnrcC2y2nYOt4",
  authDomain: "pantree-655c8.firebaseapp.com",
  projectId: "pantree-655c8",
  storageBucket: "pantree-655c8.appspot.com",
  messagingSenderId: "414079942552",
  appId: "1:414079942552:web:3ce93194e257ee46def5ed",
  measurementId: "G-RY779QBTVK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
