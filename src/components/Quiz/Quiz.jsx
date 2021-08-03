import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import firebase from "../../config/firebase";

export default function Quiz() {
  const [active, setActive] = useState(true);
  const { quiz, setQuiz, user } = useContext(AuthContext);

  useEffect(() => {
    // firebase.auth().onAuthStateChanged((userData) => {
    //   if (userData) {
    //     let tempArray = quiz;

    //     tempArray.forEach((question) => {
    //       if (question.id === questionNo) {
    //         question.active = true;
    //       } else {
    //         question.active = false;
    //       }
    //     });

    //     // console.log(tempArray);
    //   }
    // });
  }, []);
  return (
    <div className="bg-white w-full min-h-screen text-dark-700 px-8 font-Mulish relative">
      {/* Top */}
      <div className="w-full flex items-center justify-between py-8">
        <Link
          to="/"
          className="pointer text-gray-500 transition transition-duration-300 hover:shadow-lg w-10 border rounded-md border-dark h-10 p-3 flex items-center justify-center text-xl border-opacity-10 outline-none"
        >
          <i className="ri-arrow-left-s-line"></i>
        </Link>
        <span className="text-2xl font-bold" style={{ color: "#39395e" }}>
          00:15
        </span>
        <span className="w-10 h-10"></span>
      </div>
      <div className="w-full flex flex-col items-start justify-start mt-2">
        {/* Qn */}
        <div className="mb-5">
          <span className="text-xl font-bold " style={{ color: "#39395e" }}>
            4. When was the first National Reading Day observed?
          </span>
        </div>
        {/* Answers */}
        <div className="pointer mt-5 hover:shadow-md transition transition-duration-300 border shadow-sm cursor-pointer rounded-lg h-12 pl-5 bg-white border-dark w-full py-2 flex items-center justify-start outline-none  text-base border-opacity-10">
          14 July 2020
        </div>
        <div className="pointer mt-5 hover:shadow-md transition transition-duration-300 border shadow-sm cursor-pointer rounded-lg h-12 pl-5 bg-white border-dark w-full py-2 flex items-center justify-start outline-none  text-base border-opacity-10">
          14 July 2020
        </div>
        <div className="pointer mt-5 hover:shadow-md transition transition-duration-300 border shadow-sm cursor-pointer rounded-lg h-12 pl-5 bg-white border-dark w-full py-2 flex items-center justify-start outline-none  text-base border-opacity-10">
          14 July 2020
        </div>
        <div
          className={`${
            active
              ? "bg-indigo-500 shadow-md text-white"
              : "border border-opacity-10 border-dark text-dark "
          }  pointer mt-5 hover:shadow-md transition transition-duration-300   cursor-pointer rounded-lg h-12 pl-5 bg-white  w-full py-2 flex items-center justify-start outline-none  text-base `}
        >
          14 July 2020
        </div>
      </div>
      <div className="w-full flex items-center justify-between left-0 absolute bottom-10 px-8">
        <button className="w-1/2 h-12 py-2  transition transition-duration-300 ease-in transform hover:scale-105 outline-none  rounded-md text-indigo-600">
          Back
        </button>
        <button className="w-1/2 h-12 py-2 focus:ring transition transition-duration-300 ease-in transform hover:scale-105 outline-none  rounded-md bg-indigo-600 text-white">
          Next
        </button>
      </div>
    </div>
  );
}
