import React from "react";
import image from "./images/reading-book-about.jpg";

export default function About() {
  return (
    <div className="w-full h-screen bg-l-col flex items-center pt-20">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col justify-end items-center h-full relative">
        <img className="w-3/4 absolute  top-0 -left-44" src={image} alt="" />
        <div className="w-99 font-Mulish text-lg text-light mb-28">
          <div className="w-full flex items-start justify-start">
            <span className="w-16 font-extrabold text-8xl -mt-6px">T</span>
            <p className="w-82">
              he crucial goal of our works in not only the celebration of the
              written world but also plunging into the ways how it changes
            </p>
          </div>

          <p className="w-97">
            people's lives, from the early years through all the life path, for
            personal and professional growing, education and inspiration.
          </p>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-1/2 h-full pt-12">
        <span className="font-Mak-Bold text-9xl text-primary-col leading-tight">
          The <br /> 19th <br /> Annual <br /> Book
          <br /> Festival
        </span>
      </div>
    </div>
  );
}
