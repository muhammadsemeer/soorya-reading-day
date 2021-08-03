import React from "react";
import { Link } from "react-router-dom";

export default function Quiz() {
  return (
    <div className="bg-white w-full min-h-screen text-dark-700 px-8 font-Mulish">
      {/* Top */}
      <div className="w-full flex items-center justify-between py-8">
        <Link
          to="/"
          className="pointer text-gray-500 transition transition-duration-300 hover:shadow-lg w-10 border rounded-md border-dark h-10 p-3 flex items-center justify-center text-xl border-opacity-10 outline-none"
        >
          <i className="ri-arrow-left-s-line"></i>
        </Link>
        <span className="text-2xl font-bold text-gray-600">00:15</span>
        <span className="w-10 h-10"></span>
      </div>
      <div className="w-full flex flex-col items-start justify-start mt-2">
        {/* Qn */}
        <div className="mb-5">
          <span className="text-dark text-xl font-bold ">
            4. When was the first National Reading Day observed?
          </span>
        </div>
        {/* Answers */}
        <div className="pointer mt-5 hover:shadow-md transition transition-duration-300 border cursor-pointer rounded-lg h-12 pl-5 bg-white border-dark w-full py-2 flex items-center justify-start outline-none  text-base border-opacity-10">
          14 July 2020
        </div>
        <div className="pointer mt-5 hover:shadow-md transition transition-duration-300 border cursor-pointer rounded-lg h-12 pl-5 bg-white border-dark w-full py-2 flex items-center justify-start outline-none  text-base border-opacity-10">
          14 July 2020
        </div>
        <div className="pointer mt-5 hover:shadow-md transition transition-duration-300 border cursor-pointer rounded-lg h-12 pl-5 bg-white border-dark w-full py-2 flex items-center justify-start outline-none  text-base border-opacity-10">
          14 July 2020
        </div>
        <div className="pointer mt-5 hover:shadow-md transition transition-duration-300 border cursor-pointer rounded-lg h-12 pl-5 bg-white border-dark w-full py-2 flex items-center justify-start outline-none  text-base border-opacity-10">
          14 July 2020
        </div>
      </div>
    </div>
  );
}
