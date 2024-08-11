import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <li data-reveal>
      <div className="service-card container py-[30px] px-[10px]">
        <img
          src={service.image}
          width={340}
          height={380}
          loading="lazy"
          alt="Wedding Photography"
          className="img hidden"
        />
        <div>
          <h3 className="h3 card-title">{service.title}</h3>
          <p className="card-subtitle text-white-a50 text-fs-7 font-fw-300 leading-[1.5] mt-[10px] mb-[25px] ">
            {service.subtitle}
          </p>
        </div>
        <a
          href="#"
          className="btn-icon w-[55px] h-[55px] border-[1px] border-solid border-white bg-transparent"
          aria-label="See More"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="20"
            viewBox="0 0 43 20"
            fill="none"
            className="w-[25px]"
          >
            <path d="M0 10H41" stroke="white" stroke-width="2" />
            <path
              d="M33 1L41.9 10.2727L33 19"
              stroke="white"
              stroke-width="2"
            />
          </svg>
        </a>
      </div>
    </li>
  );
};

export default ServiceCard;
