import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA-gjhGwd-0jKIBaAkoobjoy_vRSIFq2u0',
  authDomain: 'coffee-5e2ff.firebaseapp.com',
  projectId: 'coffee-5e2ff',
  storageBucket: 'coffee-5e2ff.appspot.com',
  messagingSenderId: '548623363200',
  appId: '1:548623363200:web:5d96273d229cf870af8a65',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const signInGoogleWithPopUp = () =>
  signInWithPopup(auth, googleProvider);

export const FirebaseAuthUtil = {
  signInGoogleWithPopUp: () => signInWithPopup(auth, googleProvider),
  signInWithEmail: ({ email, password }) =>
    signInWithEmailAndPassword(auth, email, password),
  signUpWithEmail: ({email, password}) => createUserWithEmailAndPassword(auth, email, password)
};