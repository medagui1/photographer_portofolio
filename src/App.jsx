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

function App() {
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
