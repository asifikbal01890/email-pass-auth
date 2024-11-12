// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8-7iR9-FZfbo4ZucVA8T903vxlhHYYuk",
  authDomain: "email-pass-auth-d5afa.firebaseapp.com",
  projectId: "email-pass-auth-d5afa",
  storageBucket: "email-pass-auth-d5afa.firebasestorage.app",
  messagingSenderId: "642821532335",
  appId: "1:642821532335:web:7bca699c0c2aeec566025a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;