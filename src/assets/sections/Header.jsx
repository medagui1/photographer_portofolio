import React, { useEffect, useRef, useState } from "react";
import NavBar from "../components/NavBar";

const Header = () => {

    const [active, setActive] = useState(false)
    const [overlayActive, setOverlayActive] = useState(false)

    const navTogglerRef = useRef(null)

    const toggleMenu = () => {
        setActive(!active)
        setOverlayActive(!overlayActive)
        document.body.classList.toggle("active")
    }

    useEffect(() => {

    }, [])

  return (
    <header
      className={`/header/ fixed top-0 left-0 w-full py-[18px] duration-transition-2 z-[4] ${
        active ? "bg-eerie-black py-[12px] shadow-custom-shadow " : ""
      }`}
      data-header
    >
      <div className="/container/ px-[15px] flex justify-between items-center">
        <a href="#" className="">
          <img
            src="icons/logo.svg"
            alt="Richard home"
            className=""
            width={40}
            height={40}
          />
        </a>
        <button className="nav-open-button" aria-label="open menu" ref={navTogglerRef} onClick={toggleMenu}>
          <img src="icons/menu.svg" alt="menu icon" width={17} height={17} />
        </button>
        <NavBar toggleMenu={toggleMenu} active={active}/>
        <div onClick={toggleMenu} className={`overlay fixed inset-0 bg-black z-[1] duration-transition-1 opacity-0 pointer-events-none ${overlayActive && "opacity-75 pointer-events-auto"}`} data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

export default Header;
