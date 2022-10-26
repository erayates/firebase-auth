// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut, onAuthStateChanged, updateProfile} from 'firebase/auth';

import store from "./store";
import {login as loginHandle, logout as logoutHandle ,} from './store/auth'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export const register = async (email, password) => {
  try{
    const {user} = await createUserWithEmailAndPassword(auth,email,password)
    return user
  }catch(e){
    console.log(e.message)
  }
}

export const login = async (email, password) => {
  try{
    const {user} = await signInWithEmailAndPassword(auth,email,password)
    return user
  }catch(e){
    console.log(e.message)
  }
}

export const logout = async (email,password) => {
  try{
    const {user} = await signOut(auth,email,password)
    return user
  }catch(e){
    console.log(e.message)
  }
}


export const update = async data => {
  try{
    await updateProfile(auth.currentUser,data)
    return true
  }
  catch(e){
    console.log(e.message)
  }
 
}


onAuthStateChanged(auth,(user) => {
  if(user){
    store.dispatch(loginHandle(user))
  }else{
    store.dispatch(logoutHandle())
  }
})


// Initialize Firebase

export default app

