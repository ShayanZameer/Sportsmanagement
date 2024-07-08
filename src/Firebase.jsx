// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBo-SlPyeow35at6ZRjhKsrkTpTEvZD01M",
    authDomain: "jktbe-e333c.firebaseapp.com",
    projectId: "jktbe-e333c",
    storageBucket: "jktbe-e333c.appspot.com",
    messagingSenderId: "225767856961",
    appId: "1:225767856961:web:04c5f1750ab2bb62399fc0",
    measurementId: "G-S9V95D60P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);


export { auth, analytics };