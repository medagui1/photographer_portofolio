import React from "react";
import { gallery_cards } from "../constants/gallery_cards";
import GalleryCard from "../components/GalleryCard";

const Gallery = () => {
  const list = [0, 2, 4, 6];

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <ul className="gallery-list">
          {list.map((card, index) => (
            <li key={index} className="gallery-item" data-reveal>
              <GalleryCard card={gallery_cards[card]} />
              <GalleryCard card={gallery_cards[card + 1]} />
            </li>
          ))}
        </ul>

        <a href="#service" className="scroll-down w-[60px] h-[60px] grid place-content-center mx-auto mt-[55px] border-[1px] border-white-a15 border-solid rounded-circle duration-transition-2 hover:bg-radical-red focus-visible:bg-radical-red hover:border-radical-red focus-visible:border-radical-red">
          <img
            src="icons/scroll-down.svg"
            width="40"
            height="66"
            loading="lazy"
            alt="mouse scroll"
            className="w-[22px] "
          />
        </a>

        <img
          src="icons/gallery-shape.svg"
          width="220"
          height="78"
          loading="lazy"
          alt=""
          className="shape"
        />
      </div>
    </section>
  );
};

export default Gallery;
