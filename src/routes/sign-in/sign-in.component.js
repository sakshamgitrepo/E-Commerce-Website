import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async ()=>{
  const {user} = await signInWithGooglePopup();
  createUserDocumentFromAuth(user);
  // const userDocRef = await createUserDocumentFromAuth(user);
  }
  return (
    <div>
     <h2>SignIn Page</h2> 
     <button onClick={logGoogleUser}>
      Sign in with Google
     </button>
    </div>
  )
}

export default SignIn