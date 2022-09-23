// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCEtiA1qOr4b0G-Mi_dTUmTNg_zs3HuMVE",
    authDomain: "brydencodes.firebaseapp.com",
    projectId: "brydencodes",
    storageBucket: "brydencodes.appspot.com",
    messagingSenderId: "513990481044",
    appId: "1:513990481044:web:a36279018f0df105f0d081",
    measurementId: "G-5DF7Q0LL68",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
