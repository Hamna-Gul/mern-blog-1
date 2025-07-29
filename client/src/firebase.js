// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-1fb17.firebaseapp.com",
  projectId: "mern-blog-1fb17",
  storageBucket: "mern-blog-1fb17.firebasestorage.app",
  messagingSenderId: "556784718641",
  appId: "1:556784718641:web:55b0fb253f6cd2668fd610"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
