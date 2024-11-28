import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword,  signInWithPopup,  signOut,  updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../page/Hooks/useAxiosPublic";

export const AuthContext = createContext()
const auth = getAuth(app)

const GoogleProvider = new GoogleAuthProvider()
const GithubProvider = new GithubAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)
    const axiosPublic = useAxiosPublic()

    const register = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginWithGoogle = ()=>{
        setLoader(true)
        return signInWithPopup(auth,GoogleProvider)
    }

    const loginWithGithub = ()=>{
        setLoader(true)
        return signInWithPopup(auth,GithubProvider)
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
            const userInfo = {email: currentUser?.email}
            // jwt
            if(currentUser){
                axiosPublic.post('/jwt',userInfo)
                .then((res)=>{
                    if(res.data.token){
                        // set token localstorage
                    localStorage.setItem("access-token", res.data.token)
                    }
                })
            }
            else{
                // remove  token in localstorage
                localStorage.removeItem('access-token')
            }
    
            return () =>{
                UnSubscribe()
            }
        })
    },[])


    const authInfo = {
        register,
        updateUserProfile,
        loginWithGoogle,
        loginWithGithub,
        logOut,
        user,
        login,
        loader
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