// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyClvzXeeoFiiK1kVQ_GKQAbQBKdremN1F4",
  authDomain: "react-netflix-clone-36c4a.firebaseapp.com",
  projectId: "react-netflix-clone-36c4a",
  storageBucket: "react-netflix-clone-36c4a.appspot.com",
  messagingSenderId: "1044682753977",
  appId: "1:1044682753977:web:448774fbccfbb022691868",
  measurementId: "G-ZWM7B40FSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fireBaseAuth = getAuth(app);