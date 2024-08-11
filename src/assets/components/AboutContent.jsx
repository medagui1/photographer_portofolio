import React from 'react'

const AboutContent = () => {
  return (
    <div className="about-content mb-[35px] ">
          <h2 className="h2 section-title " data-reveal="right">
            Hi. I'm <br /> Richard Ryan
          </h2>
          <div className="wrapper has-before ps-[45px] " data-reveal="right">
            <p className="section-text text-fs-6 text-white-a70 font-fw-300 leading-[1.7] mb-[35px] ">
              A passionate <em>photographer </em>
              who are working in the field for
              <em> last 10 years.</em>
              I'm ready to give you my best.
            </p>
            <img
              src="images/signature.png"
              alt="signature"
              loading="lazy"
              width={151}
              height={92}
            />
          </div>
        </div>
  )
}

export default AboutContent