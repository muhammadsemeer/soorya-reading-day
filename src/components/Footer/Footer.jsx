import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-28 bg-l-col text-white text-lg font-Cormorant-Unicase flex items-center justify-center mt-20">
      Designed & Developed By <u className="ml-1 cursor-pointer transition transition-duration-300 transform hover:scale-105 " onClick={()=>location.href="https://instagram.com/_coder.dev"}>Soorya Kriz</u>
    </div>
  );
}
