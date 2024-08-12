import "./App.css";
import Preloading from "./assets/sections/Preloading";
import Header from "./assets/sections/Header";
import Hero from "./assets/sections/Hero";
import Gallery from "./assets/sections/Gallery";
import Category from "./assets/sections/Category";
import About from "./assets/sections/About";
import Service from "./assets/sections/Service";
import Portfolio from "./assets/sections/Portfolio";
import Footer from "./assets/sections/Footer";
import BackToTop from "./assets/components/BackToTop";
import CustomCursor from "./assets/components/CustomCursor";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");

    const scrollReveal = () => {
      revealElements.forEach((item, index) => {
        const elementIsInScreen =
          item.getBoundingClientRect().top < window.innerHeight / 1.15;
        if (elementIsInScreen) {
          item.classList.add("revealed");
        } else {
          item.classList.remove("revealed");
        }
      });
    };

    window.addEventListener("scroll", scrollReveal);

    return () => {
      window.removeEventListener("scroll", scrollReveal)
    }
  });

  return (
    <>
      <main>
        <Preloading />
        <Header />
        <Hero />
        <Gallery />
        <Category />
        <About />
        <Service />
        <Portfolio />
      </main>
      <Footer />
      <BackToTop />
      <CustomCursor />
    </>
  );
}

export default App;
