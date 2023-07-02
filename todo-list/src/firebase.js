// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjdSXe_RpI--dLSD6sJXfMC5evAFm03Ls",
  authDomain: "todo-app-5556c.firebaseapp.com",
  projectId: "todo-app-5556c",
  storageBucket: "todo-app-5556c.appspot.com",
  messagingSenderId: "426939513153",
  appId: "1:426939513153:web:b49267d41e8700a6b409c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);