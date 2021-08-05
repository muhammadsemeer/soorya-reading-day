import React from "react";
import image1 from "./images/More-1.jpg";

export default function More() {
  return (
    <div className="w-full  min-h-screen px-10 998:flex items-start justify-center">
      {/* Left Section */}
      <div className="w-full 998-w-1/2 py-10">
        <span className="font-Mak-Bold text-6xl block xl:text-9xl">
          The <br /> Mission
        </span>
        <p className="font-Mulish pt-10 text-base  sm:w-97 998:w-97 lg:text-lg">
          Through the generation, books are much more than just reading. They
          are the history keepers; they give us journey through times and epochs
          to the depth and height of ourselves. We strive to open the worlds via
          books to everyone.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full 998-w-1/2 flex items-center justify-end pt-8">
        <img
          src={
            "https://images.unsplash.com/photo-1546098073-e1df70b3bc7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
          }
          alt=""
          className="w-full  "
        />

      </div>
    </div>
  );
}
