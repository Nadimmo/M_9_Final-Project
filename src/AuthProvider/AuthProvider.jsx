import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup,  signOut,  updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app)

const GoogleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const register = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginWithGoogle = ()=>{
        setLoader(true)
        return signInWithPopup(auth,GoogleProvider)
    }

    const updateUserProfile = (name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo
        })
    }

    const logOut = ()=>{
        setLoader(true)
        signOut(auth)
    }

    const login =(email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }


    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('current user', currentUser)
            setLoader(false)
            setUser(currentUser)
    
            return () =>{
                UnSubscribe()
            }
        })
    },[])


    const authInfo = {
        register,
        updateUserProfile,
        loginWithGoogle,
        logOut,
        user,
        login
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>

            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;