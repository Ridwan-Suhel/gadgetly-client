// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQfNJLduOCFupvoqiDaSD43s6wD7QvW8A",
  authDomain: "gadgetly-3045d.firebaseapp.com",
  projectId: "gadgetly-3045d",
  storageBucket: "gadgetly-3045d.appspot.com",
  messagingSenderId: "597424844411",
  appId: "1:597424844411:web:f049b0f175610c5ba4fcde",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
