import React from "react";
import "./tailwind.css";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"

const App = () => {
  return (
    <>
    <div className="container mx-auto h-screen ">
      <Header />
      <Hero/>
    </div>
    <div className="container-fluid ml-72 ">
      <About/>
    </div>
  </>
  );
};

export default App;
