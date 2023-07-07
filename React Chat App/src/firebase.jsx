// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKF1UFYX5Zc8lcu_UAsJtuzXszkQ75uzk",
  authDomain: "react-chat-app-3142d.firebaseapp.com",
  projectId: "react-chat-app-3142d",
  storageBucket: "react-chat-app-3142d.appspot.com",
  messagingSenderId: "806737614220",
  appId: "1:806737614220:web:21cfa455c6a2c62f58f2a9",
  measurementId: "G-MJ838H7V8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);