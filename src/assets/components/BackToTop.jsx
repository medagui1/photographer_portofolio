import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [show, setShow] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0)
  useEffect(() => {
    const handleScrollPercent = () => {
      const bodyHeight = document.body.scrollHeight
      const windowHeight = window.innerHeight
      const scrollEndPos = bodyHeight - windowHeight
      const totalScrollPercent = (window.scrollY / scrollEndPos) * 100
      setScrollPercent(totalScrollPercent.toFixed(0))

      if (totalScrollPercent > 5) {
        setShow(true)
      }
      else {
        setShow(false)
      }
    }
    window.addEventListener("scroll", handleScrollPercent)

    return () => {
      window.removeEventListener("scroll", handleScrollPercent)
    }
  }, [])
  return (
    <a
      href="#top"
      className={`back-top-btn fixed bottom-[30px] right-[-70px] w-[70px] h-[70px] border-[1px] border-dashed border-current text-radical-red text-fs-11 rounded-circle grid place-items-center duration-transition-2 z-[3] hover:text-white hover:border-white ${
        show ? "translate-x-[-100px] visible" : " invisible"
      }`}
      aria-label="back to top"
      data-back-top-btn
    >
      {scrollPercent}%
    </a>
  );
};

export default BackToTop;
