import React, { useEffect, useRef } from "react";
import { jobs } from "../constants/jobs";
import { space } from "postcss/lib/list";

const Hero = () => {
  const letterBoxesRef = useRef([]);

  useEffect(() => {
    let activeLetterBoxIndex = 0;
    let lastActiveLetterBoxIndex = 0;

    const setLetterEffect = () => {
      const letterBoxes = letterBoxesRef.current;
      let totalLetterBoxDelay = 0;

      letterBoxes.forEach((letterBox, i) => {
        // getting the job title trimmed
        const letters = letterBox.dataset.text.trim();

        // clear the existing content
        letterBox.innerHTML = "";

        // looping through each letter
        letters.split("").forEach((letter, j) => {
          // creating a span
          const span = document.createElement("span");

          // each letter animation delay
          span.style.animationDelay = `${j * 0.05}s`;

          span.textContent = letter;

          span.className =
            letter === " "
              ? "space"
              : i === activeLetterBoxIndex
              ? "in"
              : "out";

          letterBox.appendChild(span);
        });

        // if the current letterBox index = the activeLetterBoxIndex
        if (i === activeLetterBoxIndex) {
          totalLetterBoxDelay = letters.length * 0.05;

          letterBox.classList.add("active");
        } else {
          letterBox.classList.remove("active");
        }
      });

      lastActiveLetterBoxIndex = activeLetterBoxIndex
      activeLetterBoxIndex = (activeLetterBoxIndex + 1) % letterBoxes.length


      requestAnimationFrame(() => {
        setTimeout(setLetterEffect, totalLetterBoxDelay * 1000 + 3000)
      })
    };

    window.addEventListener("load", setLetterEffect)

    return () => {
      window.removeEventListener("load", setLetterEffect)
    }
  }, []);

 
  return (
      <article>
        {/********* Hero *********/}
        <section
          className="section hero py-section-padding pt-[120px] text-center"
          id="home"
          aria-label="home"
        >
          <div className="container px-[15px] ">
            <img
              src="images/hero-banner.png"
              width={322}
              height={322}
              alt=""
              className="hero-banner max-w-[150px] mx-auto mb-5 "
            />
            <div className="hero-content">
              <h1 className="h1 hero-title font-recoleta leading-[1.2] text-fs-1 font-fw-400">
                Richard Ryan
              </h1>
              <div className="wrapper h2 font-recoleta leading-[1.2] font-fw-300 text-fs-2 relative text-left h-[1.2em] mt-[10px] mb-[25px] ">
                {jobs.map((job, index) => (
                  <strong
                    key={job}
                    ref={(el) => (letterBoxesRef.current[index] = el)}
                    data-text={job}
                    className="strong absolute top-0 left-[50%] translate-x-[-50%] w-[300px] font-[inherit] flex"
                  >
                    {job}
                  </strong>
                ))}
              </div>
              <p className="hero-text text-fs-10 font-fw-300 uppercase tracking-[5px] ">
                15+ Years Of Experience.
              </p>
            </div>
          </div>
          <img
            src="images/hero-shape.svg"
            width={211}
            height={189}
            alt=""
            className="shape hidden"
          />
        </section>
      </article>
  );
};

export default Hero;
