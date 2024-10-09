// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8VIPRnZCiHR2ZuzFnatkNbXe4iYCr9Hs",
  authDomain: "firstshop-f037d.firebaseapp.com",
  projectId: "firstshop-f037d",
  storageBucket: "firstshop-f037d.appspot.com",
  messagingSenderId: "127643684376",
  appId: "1:127643684376:web:01d720523fcf1f34ae7d6d",
  measurementId: "G-LDZS0KB8J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db }; // Export Firestore instance

