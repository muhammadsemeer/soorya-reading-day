import React, { createContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom";
import firebase from "../config/firebase"
const db = firebase.firestore()

// const googleProvider = new firebase.auth.GoogleAuthProvider()

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {

    const [quiz, setQuiz] = useState();
    const [answers, setAnswers] = useState([]);

    // Handle Answer
    const handleAnswer = (index) => {
        let tempArray = quiz
        console.log(index)
        console.log(tempArray)
        tempArray.answerOptions[index].active = true
        setQuiz(tempArray)
    }



    const value = {
        quiz, setQuiz, handleAnswer
    }

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;

}