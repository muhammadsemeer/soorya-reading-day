import React, { useContext, useEffect } from 'react'
import QuizComp from "../components/Quiz/Quiz"
import firebase from "../config/firebase"
import { AuthContext } from '../contexts/AuthContext'

export default function Quiz() {
    const { setQuiz, quiz } = useContext(AuthContext)

    useEffect(async () => {
        // let ref = await firebase.firestore().collection("quiz").get();
        // setQuiz(() => ref.docs.map((doc) => doc.data()))

    }, [])

    return (
        <>
            {/* {console.log(quiz, "qq")} */}
            <QuizComp />
        </>
    )
}
