import React, { createContext, useState } from "react"
import { useHistory } from "react-router-dom";
import Firebase from "../config/firebase"
const db = Firebase.firestore()

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    //Handle signup
    const handleSignup = (name, email, password) => {
        Firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((ref) => {
                ref.user.updateProfile({
                    displayName: name,
                });
                let user = {
                    uid: ref.user.uid,
                    name: name,
                    email: email,
                }
                db.collection("users").add(user)
                    .then(() => {
                        handleSignin(email, password)
                    })
                    .catch((error) => {
                        console.error("Error adding document: ", error);
                    });

            })
            .catch(error => {
                var errorCode = error.code;
                if (errorCode === "auth/email-already-in-use") {
                    alert("auth/email-already-in-use")
                }
            })
    }

    //Handle signin
    const handleSignin = (email, password) => {
        Firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/")
            })
            .catch((error) => {
                var errorCode = error.code;
                if (errorCode === "auth/email-already-in-use") {
                    alert("auth/email-already-in-use")
                } else {
                    alert(error.code)
                }
            });

    }

    //Handle Signout
    const handleSignout = () => {
        Firebase.auth().signOut().then(function () {
            history.push("/")
            setUser(null)
            setIsAuth(false)
        }, function (error) {
            console.error('Sign Out Error', error);
        });

    }

    const value = {
        handleSignup, user, setUser, isAuth, setIsAuth, handleSignout, handleSignin, loading, setLoading
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}