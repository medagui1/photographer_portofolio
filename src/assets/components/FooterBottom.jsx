import React from "react";
import SocialLinks from "./SocialLinks";

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <div className="container">
        <a href="#" className="logo mx-auto max-w-max mb-[20px] ">
          <img
            src="icons/logo.svg"
            width={40}
            height={40}
            loading="lazy"
            alt="Richard home"
          />
        </a>
        <SocialLinks />
        <p className="copyright font-fw-300 tracking-[0.5px] pb-[15px] text-center">
          Made with Love.
        </p>
      </div>
      <div className="footer-bg has-before absolute bottom-0 left-0 w-full h-[60%] z-[-1] ">
        <img
          src="images/footer/footer-bg.jpg"
          width={1920}
          height={1135}
          loading="lazy"
          alt="photography"
          className="img-cover object-top"
        />
      </div>
    </div>
  );
};

export default FooterBottom;
