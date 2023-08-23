import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, Auth } from "firebase/auth";

import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxlPipcde8afgzC8a1VqxvKTGknlS9I84",
  authDomain: "book-recommendation-app-d482d.firebaseapp.com",
  projectId: "book-recommendation-app-d482d",
  storageBucket: "book-recommendation-app-d482d.appspot.com",
  messagingSenderId: "447251242310",
  appId: "1:447251242310:web:3561a9304a10b1256dd947",
  measurementId: "G-QWT5LC4QP7",
};

export const app = initializeApp(firebaseConfig);
export const  auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
