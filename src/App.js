import React from "react";
import "./tailwind.css";
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"

const App = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Hero/>
    </div>
  );
};

export default App;
