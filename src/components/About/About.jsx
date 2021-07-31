import React from "react";
import image from "./images/reading-book-about.jpg";

export default function About() {
  return (
    <div className="w-full  bg-l-col  pt-14 px-10 pb-20">
      {/* Left Section */}
      <div className="w-full flex flex-col justify-end items-center h-full relative">
        <img className="w-98 absolute hidden top-0 -left-44" src={image} alt="" />
        <div className="w-full font-Mulish text-base text-light ">
          <div className  ="w-full flex items-start justify-center pt-10">
            <span className="w-16 font-extrabold text-7xl -mt-6px ">T</span>
            <p className="w-full">
              he crucial goal of our works in not only the celebration of the
              written world but also good
            </p>
          </div>

          <p className="w-full">
            people's lives, from the early years through all the life path, for
            personal and professional growing, education and inspiration.
          </p>
        </div>
      </div>
      {/* Right Section */}
      <div className="w-full h-full pt-12 relative">
        <span className="font-Mak-Bold text-6xl text-primary-col ">
          The <br /> 19th <br /> Annual <br /> Book
          <br /> Festival
        </span>
      </div>
    </div>
  );
}
