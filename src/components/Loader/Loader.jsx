import React from "react";
import "./styles/Loader.css"

function Loader() {
  return (
    <div className="w-full h-screen bg-l-col overflow-hidden preLoader-timing fixed" >
      <div className="absolute top-4.0 left-1/2 transform translate-x-2/4 translate-y-2/4" >LOADING</div>
    </div>
  );
}

export default Loader;
