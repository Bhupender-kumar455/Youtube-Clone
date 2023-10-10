// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCj4X69Cxg7sXZVfvOEDFbks7qUoX2NzY4",
    authDomain: "clone-f7aab.firebaseapp.com",
    projectId: "clone-f7aab",
    storageBucket: "clone-f7aab.appspot.com",
    messagingSenderId: "471846530554",
    appId: "1:471846530554:web:8cb5be562c638d7e95c843",
    measurementId: "G-6YSBHLSQME"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);