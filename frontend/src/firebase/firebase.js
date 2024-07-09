// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLYWNwxREC85WdFyx7XUH52q6FUlPrQKI",
    authDomain: "blogapp-b9001.firebaseapp.com",
    projectId: "blogapp-b9001",
    storageBucket: "blogapp-b9001.appspot.com",
    messagingSenderId: "405059458881",
    appId: "1:405059458881:web:8a5b47027f72e3c6e573c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);