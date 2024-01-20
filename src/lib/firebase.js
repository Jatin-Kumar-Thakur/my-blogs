// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "my-blogs-49b06.firebaseapp.com",
    projectId: "my-blogs-49b06",
    storageBucket: "my-blogs-49b06.appspot.com",
    messagingSenderId: "328249402942",
    appId: "1:328249402942:web:a89413a894310bd2b8936f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);