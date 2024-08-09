import React from "react";

const GalleryCard = ({card}) => {
  return (
    <div className="gallery-card">
      <figure
        className="card-banner img-holder has-before"
      >
        <img
          src={card.image}
          alt={card.name}
          width={450}
          height={625}
          loading="lazy"
          className="img-cover"
        />
      </figure>
      <div className="card-content">
        <h3 className="h6">
          <a href="#" className="card-title">
            {card.name}
          </a>
        </h3>
        <span className="card-tag ">{card.tag}</span>
      </div>
      <a href="#" className="btn-icon">
        <img
          src="icons/arrow-forward.svg"
          alt="arrow-forward icon"
          width={41}
          height={20}
          loading="lazy"
          className=""
        />
      </a>
    </div>
  );
};

export default GalleryCard;
