import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgf7EOREAYILp8gXnOtSVgAfePZX0y6_s",
  authDomain: "crown-clothing-db-562a5.firebaseapp.com",
  projectId: "crown-clothing-db-562a5",
  storageBucket: "crown-clothing-db-562a5.appspot.com",
  messagingSenderId: "776711771700",
  appId: "1:776711771700:web:d467affb1aff7d3e4c9c61",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {

  if(!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  

  //if the user data does not exist
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    
    //create user in database using setdoc 
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  //else, if the user data does exist
  return userDocRef;

};
 
export const createAuthUserWithEmailAndPassword = async (email, password)=>{
  
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password)=>{
  
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async()=> await signOut(auth);

export const onAuthStateChangedListener =(callback) =>
    onAuthStateChanged(auth, callback );