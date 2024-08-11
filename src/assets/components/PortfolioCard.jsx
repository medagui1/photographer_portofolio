import React from "react";

const PortfolioCard = ({ item }) => {
  return (
    <div className="portfolio-card relative mb-[50px] " data-reveal>
      <figure
        className="card-banner has-before img-holder"
        style={{ "--width": item.width, "--height": item.height }}
      >
        <img
          src={item.image}
          width={item.width}
          height={item.height}
          alt="Shoe Promo"
          className="img-cover"
          loading="lazy"
        />
      </figure>
      <div className="card-content bottom-0 left-0 w-full px-5 py-[15px]  ">
        <h3 className="h4">
          <a href="#" className="card-title hover:underline focus:underline">
            {item.content}
          </a>
        </h3>
        <p className="card-tag text-white-a70 font-fw-300">{item.tag}</p>
      </div>
      <a href="#" className="btn-icon top-5 right-5 w-[45px] h-[45px] hover:bg-radical-red" aria-label="See more">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="20"
          viewBox="0 0 43 20"
          fill="none"
          className="w-[20px]"
        >
          <path d="M0 10H41" stroke="black" stroke-width="2" />
          <path d="M33 1L41.9 10.2727L33 19" stroke="black" stroke-width="2" />
        </svg>
      </a>
    </div>
  );
};

export default PortfolioCard;
