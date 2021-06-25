import React from "react";

export default function Header() {
  return (
      <div className="w-full h-32 lg:h-48 flex items-center justify-between ">
      {/* Logo */}
      <div className="w-14 h-14 rounded-full bg-l-col flex items-center justify-end ">
        <div className="bg-primary-col w-8 h-8 rounded-full mr-6px"></div>
      </div>
      {/* Quiz */}
      <div className="flex items-center justify-center ">
          <span className="font-Cormorant-Unicase text-2xl font-normal">Quiz</span>
      </div>
    </div>
  );
}
