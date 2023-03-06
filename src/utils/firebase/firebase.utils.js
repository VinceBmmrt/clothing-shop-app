import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnXsmFRsOXieqnowND1DukC0vlbXhjGDQ",
  authDomain: "crwn-db-36604.firebaseapp.com",
  projectId: "crwn-db-36604",
  storageBucket: "crwn-db-36604.appspot.com",
  messagingSenderId: "722688611030",
  appId: "1:722688611030:web:593cafa91ad6c58b79ef77",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
