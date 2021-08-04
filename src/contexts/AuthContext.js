import React, { createContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import firebase from "../config/firebase"
const db = firebase.firestore()

// const googleProvider = new firebase.auth.GoogleAuthProvider()

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    const [Alert, setAlert] = useState({ status: false, msg: "" });
    const history = useHistory();

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (userData) => {
            if (userData) {
                let ref = await firebase.firestore().collection("users").where("uid", "==", userData.uid).get();
                setUser(ref.docs.map((doc) => doc.data())[0])
                setIsAuth(true)
                setLoading(false)
            } else {
                setIsAuth(false)
                setLoading(false)
            }
        });
    }, [])

    //Handle signup
    const handleSignup = (name, email, password) => {
        firebase.auth()
            .createUserWithEmailAndPassword(email, password)
            .then((ref) => {
                ref.user.updateProfile({
                    displayName: name,
                });
                let user = {
                    uid: ref.user.uid,
                    name: name,
                    email: email,
                    questionNo: 1,
                    score: 0
                }
                db.collection("users").add(user)
                    .then(() => {
                        handleSignin(email, password)
                    })
                    .catch((error) => {
                        setAlert({ status: false, msg: "Something went wrong please try again" })
                    });

            })
            .catch(error => {
                var errorCode = error.code;
                if (errorCode === "auth/email-already-in-use") {
                    setAlert({ status: true, msg: "Email already exists please sign in" })
                    setLoading(false)
                } else {
                    setAlert({ status: true, msg: "Something went wrong please try again" })
                    setLoading(false)
                }
                setTimeout(() => {
                    setAlert({ status: false, msg: "" })
                }, 5000);
            })
    }

    //Handle signin
    const handleSignin = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/quiz")
            })
            .catch((error) => {
                setAlert({ status: true, msg: "Something went wrong please try again" })
                setLoading(false)
                setTimeout(() => {
                    setAlert({ status: false, msg: "" })
                }, 5000);
            });

    }

    //Handle Signout
    const handleSignout = () => {
        firebase.auth().signOut().then(function () {
            history.push("/")
            setUser(null)
            setIsAuth(false)
        }, function (error) {
        });

    }


    // Handle Google Auth
    const handleGoogleAuth = () => {

        firebase.auth().signInWithPopup(provider).then((res) => {
            console.log(res.user)
        }).catch((error) => {
            setAlert({ status: true, msg: "Something went wrong please try again" })
            setLoading(false)
            setTimeout(() => {
                setAlert({ status: false, msg: "" })
            }, 5000);
        })

    }

    const value = {
        handleSignup, user, setUser, isAuth, setIsAuth, handleSignout, handleSignin, loading, setLoading, handleGoogleAuth, Alert
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

}