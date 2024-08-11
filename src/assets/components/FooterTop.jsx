import React from 'react'
import {footer_data} from '../constants/footer_data'

const FooterTop = () => {
  return (
    <div className="footer-top section pt-[100px] pb-[140px] border-t-[1px] border-solid border-white-a9 text-center z-[1] " id="contact">
        <div className="container">
          <p className="section-subtitle" data-reveal>
            Contact Us
          </p>
          <h2 className="h2 section-title mt-[20px] mb-[90px] leading-[normal] " data-reveal>
            Work inquiry, Job oppurtunities? Send message.
          </h2>
          <a href="#" className="btn-icon w-[60px] h-[60px] mx-auto hover:bg-radical-red" >
            <img
              src="icons/arrow-forward.svg"
              width={43}
              height={20}
              loading="lazy"
              alt="arrow-forward icon"
              className='w-[30px] '
            />
          </a>
          {footer_data.map((item, index) => (
            <img
              src={item.image}
              width={item.width}
              height={item.height}
              loading="lazy"
              alt={item.alt}
              className={`abs-img hidden abs-img-${index+1}`}
              data-reveal
            />
          ))}
          <img src="icons/footer/footer-shape.svg" width={185} height={134} loading="lazy" alt="" className="shape" />
        </div>
      </div>
  )
}

export default FooterTop