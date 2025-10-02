import React from "react";
import HeroSection from "./components/HeroSection";
import Materials from "./components/Materials";
import HelpResources from "./components/HelpResources";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <>
      <HeroSection />
      <Materials />
      <HelpResources />
    </>
  );
}

export default App;
