// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.API_PASSWOER,
  authDomain: process.env.API_FIRE_AUTH,
  projectId: process.env.API_FIRE_PROJECT,
  storageBucket: process.env.API_FIRE_STORAGE,
  messagingSenderId: process.env.API_FIRE_SSAGIN,
  appId: process.env.API_FIRE_P,

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);