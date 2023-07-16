import { createContext, useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, provider } from "../firebase/config";


export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({
        logged: false,
        email: null
    })

    const [isAdmin, setAdmin] = useState(false)


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
                if(user.email === 'admin@admin.com') {
                    setAdmin(true)
                    localStorage.setItem('isAdmin', true)
                }
                

            } else {
               
                setUser({
                    logged: false,
                    email: null
                })
                setAdmin(false)
                localStorage.setItem('email', '')
                localStorage.setItem('isAdmin', false)

            }

        })
    }, [])

    return (
        <AuthContext.Provider value={{googleLogin, user, isAdmin, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}