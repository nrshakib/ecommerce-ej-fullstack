// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHAAIjXM31d2WKfJSWi1B4awLZ4xwLk9o",
  authDomain: "ema-john-simple-8d2ab.firebaseapp.com",
  projectId: "ema-john-simple-8d2ab",
  storageBucket: "ema-john-simple-8d2ab.appspot.com",
  messagingSenderId: "209431200302",
  appId: "1:209431200302:web:4f69d3cc9fca67aa0b15bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;