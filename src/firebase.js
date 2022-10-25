// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth';
import { useToast } from "@chakra-ui/react";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0g6Kh4EvQnRt1X3ML51YIWlOK8Yj2YqQ",
  authDomain: "react-shopapp-6d9fd.firebaseapp.com",
  databaseURL: "https://react-shopapp-6d9fd-default-rtdb.firebaseio.com",
  projectId: "react-shopapp-6d9fd",
  storageBucket: "react-shopapp-6d9fd.appspot.com",
  messagingSenderId: "906086479928",
  appId: "1:906086479928:web:2a817b6a7bbc2566ae8ecd"
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




// Initialize Firebase

export default app

