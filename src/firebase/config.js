// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

/* import { getAnalytics } from "firebase/analytics"; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP-fjY-rUWjp_1MOuthfGQAW0OVOxQ7XY",
  authDomain: "react-10a34.firebaseapp.com",
  projectId: "react-10a34",
  storageBucket: "react-10a34.appspot.com",
  messagingSenderId: "416899549088",
  appId: "1:416899549088:web:4a38a2d2b7d15173e646c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()