import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCvFoNs3wwcocLN1HwWZ7-5-zia6KMsD2o",
    authDomain: "trib-60c0f.firebaseapp.com",
    projectId: "trib-60c0f",
    storageBucket: "trib-60c0f.appspot.com",
    messagingSenderId: "596060814842",
    appId: "1:596060814842:web:a1e2b0e88d4d55c739f843",
    measurementId: "G-PWNB8R1GFC"
  };

const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
