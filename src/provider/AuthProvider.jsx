import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const AuthContext= createContext(null);
const auth= getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]= useState(true)
    const googleProvider = new GoogleAuthProvider();


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }

    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
   }
   useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, loggedUser=>{
         console.log('logged in user inside auth state observer', loggedUser)
         setUser(loggedUser)
         setLoading(false)
     })
     return ()=>{
         unsubscribe();
     }
},[])

const authInfo={
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleSignIn,

}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;