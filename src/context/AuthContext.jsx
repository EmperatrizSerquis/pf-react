import { createContext, useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({
        logged: false,
        email: null
    })

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
             
        .catch(error => {
            const errorCode = error.code 
            const errorMessage = error.message 

        })
    }


    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)

        .catch(error => {
            const errorCode = error.code 
            const errorMessage = error.message 
        })
    }

    const logout = () => {
        signOut(auth)
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
    }

   
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            
            if (user) {

                setUser({
                    logged: true,
                    email: user.email
                })   
                localStorage.setItem('email', user.email)

            } else {
               
                setUser({
                    logged: false,
                    email: null
                })
                localStorage.setItem('email', '')
            }

        })
    }, [])

    return (
        <AuthContext.Provider value={{googleLogin, user, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}