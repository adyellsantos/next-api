// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXy89_q1JJmY44U9MV200ElfEsV0fVAU4",
  authDomain: "rest-app-6e3db.firebaseapp.com",
  projectId: "rest-app-6e3db",
  storageBucket: "rest-app-6e3db.appspot.com",
  messagingSenderId: "669840723119",
  appId: "1:669840723119:web:120653f1e4bdef36bf985a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);