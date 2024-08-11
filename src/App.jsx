import { useState } from "react";
import "./App.css";
import Preloading from "./assets/sections/Preloading";
import Header from "./assets/sections/Header";
import Hero from "./assets/sections/Hero";
import Gallery from "./assets/sections/Gallery";
import Category from "./assets/sections/Category";
import About from "./assets/sections/About";
import Service from "./assets/sections/Service";
import Portfolio from "./assets/sections/Portfolio";

function App() {
  return (
    <>
      <Preloading />
      <Header />
      <Hero />
      <Gallery />
      <Category />
      <About />
      <Service />
      <Portfolio />
    </>
  );
}

export default App;
