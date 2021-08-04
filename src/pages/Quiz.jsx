import React, { useContext, useEffect } from 'react'
import QuizComp from "../components/Quiz/Quiz"
import firebase from "../config/firebase"
import { AuthContext } from '../contexts/AuthContext'

export default function Quiz() {
    return (
        <>
            <QuizComp />
        </>
    )
}
