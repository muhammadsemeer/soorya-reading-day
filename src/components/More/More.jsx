import React from "react";
import image1 from "./images/More-1.jpg"

export default function More() {
  return (
    <div className="w-full  min-h-screen px-10">
      {/* Left Section */}
      <div className="w-full py-10">
        <span className="font-Mak-Bold text-7xl block ">
          The <br /> Mission
        </span>
        <p className="font-Mulish py-10 text-base  ">
          Through the generation, books are much more than just reading. They
          are the history keepers; they give us journey through times and epochs
          to the depth and height of ourselves. We strive to open the worlds via
          books to everyone.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full">
          <img src={"https://images.pexels.com/photos/4440123/pexels-photo-4440123.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"} alt="" className="w-full " />
      </div>
    </div>
  );
}
