import React, { useEffect } from "react";
import { jobs } from "../constants/jobs";
import { space } from "postcss/lib/list";

const Hero = () => {
  useEffect(() => {
    const letterBoxes = document.querySelectorAll("[data-letter-effect]");
    let activeLetterBoxIndex = 0;
    let lastActiveLetterBoxIndex = 0;
    let totalLetterBoxDelay = 0;

    const setLetterEffect = () => {
      for (let i = 0; i < letterBoxes.length; i++) {
        // set initial animation delay
        let letterAnimationDelay = 0;

        // get all characters from the current letter box
        const letters = letterBoxes[i].textContent.trim();

        // remove all the characters from the current letter box
        letterBoxes[i].textContent = "";

        // loop through all letters

        for (let j = 0; j < letters.length; j++) {
          // create a span

          const span = document.createElement("span");

          // set animation delay on span
          span.style.animationDelay = `${letterAnimationDelay}s`;

          // set the 'in' class on the span, if current letter box is active
          // otherwise class is 'out'
          if (i === activeLetterBoxIndex) {
            span.classList.add("in");
          } else {
            span.classList.add("out");
          }

          // pass current letter into span
          span.textContent = letters[j];

          // add space class on span, when current letter contain space
          if (letters[j] === " ") span.classList.add("space");

          // pass the span on current letter box
          letterBoxes[i].appendChild(span);

          // skip letterAnimationDelay when loop is in the last index
          if (j >= letters.length - 1) break;

          // otherwise update
          letterAnimationDelay += 0.05;
        }

        // get total delay of active letter box
        if (i === activeLetterBoxIndex) {
          totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
        }

        // add active class on last active letter box
        if (i === lastActiveLetterBoxIndex) {
          letterBoxes[i].classList.add("active");
        } else {
          letterBoxes[i].classList.remove("active");
        }
      }

      setTimeout(() => {
        lastActiveLetterBoxIndex = activeLetterBoxIndex;

        // update activeLetterBoxIndex based on total letter boxes
        activeLetterBoxIndex >= letterBoxes.length - 1
          ? (activeLetterBoxIndex = 0)
          : activeLetterBoxIndex++;

        setLetterEffect();
      }, (totalLetterBoxDelay * 1000) + 3000);
    };

    // call the letter effect function after the window loaded
    window.addEventListener("load", setLetterEffect)
  }, []);

  return (
    <main>
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
                    className="strong absolute top-0 left-[50%] translate-x-[-50%] w-[300px] font-[inherit] flex"
                    data-letter-effect
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
    </main>
  );
};

export default Hero;
