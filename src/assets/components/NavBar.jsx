import React, { useState } from "react";
import { navlinks } from "../constants/navlinks";

const NavBar = ({toggleMenu, active}) => {

  return (
    <nav
      className={`navbar fixed top-0 right-[-280px] bg-eerie-black h-[100vh] max-w-[280px] w-full p-[25px] overflow-y-auto z-[2] duration-[250ms] ease-cubic-out ${
        active && " visible translate-x-[-280px] duration-500 "
      }`}
      data-navbar
    >
      <div className="navbar-top flex justify-between items-center">
        <a href="#" className="/logo/ ">
          <img
            src="icons/nav-logo.svg"
            alt="Richard home"
            className="/img/ w-[130px] "
            width={140}
            height={40}
          />
        </a>
        <button className="nav-close-btn w-[25px] h-[25px] " aria-label="close-menu" onClick={toggleMenu}>
          <span className="bg-white-a80 w-[25px] h-[3px] rounded-[5px] duration-transition-1  rotate-45 translate-y-[3px] "></span>
          <span className="bg-white-a80 w-[25px] h-[3px] rounded-[5px] duration-transition-1 rotate-[-45deg]"></span>
        </button>
      </div>

      <ul className="navbar-list text-center py-10 ">
        {navlinks.map((link, index) => (
          <li key={`${index}_${link.name}`} className="navbar-item">
            <a href={link.link} className="navbar-link text-fs-7 font-fw-400 py-[2px] capitalize duration-transition-1 hover:text-radical-red focus:text-radical-red">
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <button className="login-btn flex justify-center items-center gap-[15px] w-full bg-radical-red text-white py-2 px-[30px] rounded-radius-5 mb-[50px] ">
        <img src="icons/user.svg" alt="user icon" width={21} height={21} />
        <span className="span font-fw-500">Login</span>
      </button>

      <p className="navbar-title text-fs-8 font-fw-500 leading-[1] mb-[15px] ">My Address</p>

      <address className="navbar-text text-white-a75 font-fw-300 leading-[1.6] mb-[15px] ">
        3287 Indiana Avenue, Waialua, Hawaii
      </address>

      <p className="navbar-text text-white-a75 font-fw-300 leading-[1.6] mb-[15px]">
        Urgent issue? call us at
        <a href="tel:8085613846" className="contact-link text-radical-red text-fs-6 font-fw-400 hover:underline focus:underline ">
          808-561-3846
        </a>
      </p>
    </nav>
  );
};

export default NavBar;
