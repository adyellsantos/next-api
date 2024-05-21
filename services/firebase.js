// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.api_password,
  authDomain: process.env.api_FIRE_AUTH,
  projectId: process.env.api_FIRE_PROJECT,
  storageBucket: process.env.api_FIRE_STORAGE,
  messagingSenderId: process.env.api_FIRE_SSAGIN,
  appId: process.env.api_FIRE_P,
  measurementId: process.env.api_FIRE_ASUREMENT
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);