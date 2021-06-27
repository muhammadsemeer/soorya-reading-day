import React from "react";
import "./tailwind.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import More from "./components/More/More";

const App = () => {
  return (
    <>
      <div className="container px-10 sm:mx-auto min-h-screen w-full ">
        <Header />
        <Hero />
      </div>
      {/* <div className="container-fluid ml-72 ">
        <About />
      </div>  */}
      <More />
    </>
  );
};

export default App;
