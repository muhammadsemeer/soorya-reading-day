import React, { createContext, useState } from "react"
import { useHistory } from "react-router-dom";
import Firebase from "../config/firebase"


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const history = useHistory();

    //Handle signup
    const handleSignup = (name, email, password) => {
        Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((ref) => {
                ref.user.updateProfile({
                    displayName: name,
                });
                console.log(ref.user)
                console.log(ref.additionalUserInfo)
                alert("Sign In Successful")

                handleSignin(email, password)
            })
            .catch(error => console.log(error))
    }

    //Handle signin
    const handleSignin = (email, password) => {
        Firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential.user, "login user")

                history.push("/")
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });

    }

    const value = {
        handleSignup, user, setUser
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}