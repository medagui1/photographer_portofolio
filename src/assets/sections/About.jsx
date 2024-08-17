import React from "react";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <section className="section about" id="about" aria-label="about me">
      <div className="container grid gap-[45px] overflow-hidden">
        <AboutContent />
        <figure className="about-banner ps-[45px] relative" data-reveal='left'>
            <div className="img-holder has-before" style={{ '--width' : 512, "--height" : 684 }}>
                <img src="images/about-banner.jpg" width={512} height={684} alt="Richard Hanrick" className="img-cover" loading="lazy" />
            </div>
            <img src="icons/about-shape-1.png" width={178} height={178} loading="lazy" alt="" className="shape shape-1 block absolute bottom-[10%] left-0 z-[1] w-[100px] " />
            <img src="icons/about-shape-2.svg" width={659} height={653} loading="lazy" alt="" className="shape shape-2" />
        </figure>
        <img src="icons/about-shape-3.svg" width={239} height={232} loading="lazy" alt="" className="shape shape-3" />
      </div>
    </section>
  );
};
export default About;
