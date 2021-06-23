import React from "react";

export default function Hero() {
  return (
    <div className="w-full flex items-center justify-center">
      {/* Left Section */}
      <div className="w-1/2 flex flex-col items-start justify-center">
        <span className="w-80 font-Mulish text-lg">
          The International Book Festival is a remarkable event gathering book
          lovers from all over the world in Berlin, Germany. The best worms to
          get inspired together.
        </span>
        <span className="font-Mak-Bold text-9xl pt-20">Don't stop reading</span>
      </div>
      {/* Right Section */}
      <div className="w-1/2 flex flex-col items-start pl-10 justify-center relative">
        <div className="w-96 flex flex-col items-end">
          <span className="font-Mulish text-lg py-2">
            Berlin, Germany 6-8 Dec
          </span>
          <img
            className="w-96 object-cover"
            src="https://images.pexels.com/photos/2228580/pexels-photo-2228580.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
            alt=""
          />
        </div>
        <div className="absolute right-0 bottom-0 bg-primary-col font-Mulish text-base text-white w-28 h-28 flex items-center justify-center rounded-full">
          <span>start quiz</span>
        </div>
      </div>
    </div>
  );
}
