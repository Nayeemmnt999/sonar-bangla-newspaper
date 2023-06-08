// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKdU9qfwbg6L9HeY-kxJPUNVX3wEG6Lz0",
  authDomain: "sonar-bangla-newspaper.firebaseapp.com",
  projectId: "sonar-bangla-newspaper",
  storageBucket: "sonar-bangla-newspaper.appspot.com",
  messagingSenderId: "1025391055166",
  appId: "1:1025391055166:web:e37cd27dee40b4544bdc6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;