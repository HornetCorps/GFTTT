import { initializeApp } from "firebase/app";
import {  getAuth, signInWithRedirect, GoogleAuthProvider, GithubAuthProvider  } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,

    authDomain: process.env.REACT_APP_AUTH_DOMAIN,

    //databaseURL: process.env.REACT_APP_DATABASE_URL 
  
    projectId: process.env.REACT_APP_PROJECT_ID,
  
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  
    appId: process.env.REACT_APP_APP_ID
  
  };

// Initializes the firebase App
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider;

export const auth = getAuth(app);  
  
export const signInWithGoogle = () => {
    signInWithRedirect(auth, provider)
  };

export const signInWithGitHub = () => {
    signInWithRedirect(auth, providerGit)
  };  
